import { Test, TestingModule } from '@nestjs/testing';

import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { mockCustomerService } from './customer.mock';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [{ provide: CustomerService, useFactory: mockCustomerService }],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
