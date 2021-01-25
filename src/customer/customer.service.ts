import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Not } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerFilterDto } from './dto/customer-filter.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private customerRespository: CustomerRepository,
  ) {}

  getAll(filterDto: CustomerFilterDto): Promise<Customer[]> {
    return this.customerRespository.getCustomers(filterDto);
  }

  async getById(id: string, relations = ['notes'], throwException = true): Promise<Customer> {
    const customer = await this.customerRespository.getByIdWithNotes(id, relations);

    if (!customer && throwException) {
      throw new NotFoundException(`customer with id '${id}' not found.`);
    }

    return customer;
  }

  getByEmail(email: string, excludeId = null): Promise<Customer> {
    let where = { email: String(email).toLowerCase().trim() } as FindConditions<Customer>;

    if (excludeId) {
      where = { ...where, id: Not(excludeId) };
    }

    return this.customerRespository.findOne({
      where,
    });
  }

  async create(dto: CreateCustomerDto): Promise<Customer> {
    const customer = await this.getByEmail(dto.email);

    if (customer?.id) {
      throw new BadRequestException(`The customer with the email '${dto.email}' already exists.`);
    }

    return this.customerRespository.createCustomer(dto);
  }

  async update(id: string, dto: UpdateCustomerDto): Promise<Customer> {
    const { email } = dto || {};
    const customer = await this.getById(id, []);

    if (email) {
      const customerByEmail = await this.getByEmail(email, id);

      if (customerByEmail?.id) {
        throw new BadRequestException(`The customer with the email '${dto.email}' already exists.`);
      }
    }

    return this.customerRespository.updateCustomer(customer, dto);
  }
}
