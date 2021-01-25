import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './customer.entity';
import { CustomerStatus } from './customer.constants';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
  private logger = new Logger(CustomerRepository.name);

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
