import { BadRequestException, InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './customer.entity';
import { CustomerFilterDto } from './dto/customer-filter.dto';
import { CustomerStatus } from './customer.constants';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
  private logger = new Logger(CustomerRepository.name);

  async getCustomers(filterDto: CustomerFilterDto): Promise<Customer[]> {
    const { filterCriteria, filter, sortCriteria, sortOrder } = filterDto;

    const query = this.createQueryBuilder('customer').select([
      'customer.id',
      'customer.status',
      'customer.firstName',
      'customer.lastName',
      'customer.email',
    ]);

    if ((filterCriteria && !filter) || (filter && !filterCriteria)) {
      throw new BadRequestException('filterCriteria attribute has to be called with filter attribute');
    }

    if ((sortCriteria && !sortOrder) || (sortOrder && !sortCriteria)) {
      throw new BadRequestException('sortCriteria attribute has to be called with sortOrder attribute');
    }

    if (filterCriteria && filter) {
      query.where(`customer.${filterCriteria} LIKE '%${filter}%'`);
    }

    if (sortCriteria && sortOrder) {
      query.orderBy(sortCriteria, sortOrder);
    }

    return query.getMany();
  }

  async getByIdWithNotes(id: string, relations = []): Promise<Customer> {
    const query = this.createQueryBuilder('customer');
    if (relations.includes('notes')) {
      query.leftJoinAndSelect('customer.notes', 'note', 'note.deletedAt IS NULL');
    }

    query.where('customer.id = :id', { id });

    return query.getOne();
  }

  async createCustomer(dto: CreateCustomerDto): Promise<Customer> {
    const { firstName, lastName, email, phoneNumber, status } = dto;
    const customer = this.create();
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.email = email.toLowerCase().trim();
    customer.status = status || CustomerStatus.CURRENT;
    customer.phoneNumber = phoneNumber;

    try {
      await customer.save();

      return customer;
    } catch (error) {
      const msg = `An error has occured creating the customer with email ${customer.email}. ${error.message}`;
      this.logger.error(msg, error.stack);
      throw new InternalServerErrorException(msg);
    }
  }

  async updateCustomer(customer: Customer, dto: UpdateCustomerDto): Promise<Customer> {
    customer.firstName = dto.firstName || customer.firstName;
    customer.lastName = dto.lastName || customer.lastName;
    customer.status = dto.status || customer.status;
    customer.email = dto.email || customer.email;
    customer.phoneNumber = dto.phoneNumber || customer.phoneNumber;

    try {
      const updatedCustomer = await customer.save();

      return updatedCustomer;
    } catch (error) {
      const msg = `An error has occured updating the customer with email ${customer.email}. ${error.message}`;
      this.logger.error(msg, error.stack);
      throw new InternalServerErrorException(msg);
    }
  }
}
