import { EntityRepository, Repository } from 'typeorm';

import { Customer } from './customer.entity';
import { Logger } from '@nestjs/common';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
  private logger = new Logger(CustomerRepository.name);
}
