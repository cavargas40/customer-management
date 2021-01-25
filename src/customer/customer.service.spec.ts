import { Test, TestingModule } from '@nestjs/testing';
import { mockCreateCustomerDto, mockCustomer, mockCustomerRepository, mockUpdateCustomerDto } from './customer.mock';

import { CustomerRepository } from './customer.repository';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let customerRepository: CustomerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, { provide: CustomerRepository, useFactory: mockCustomerRepository }],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    customerRepository = module.get<CustomerRepository>(CustomerRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a customer', async () => {
    customerRepository.findOne = jest.fn().mockResolvedValue(null);
    expect(customerRepository.createCustomer).not.toHaveBeenCalled();

    const result = await service.create(mockCreateCustomerDto);

    expect(customerRepository.createCustomer).toHaveBeenCalledWith(mockCreateCustomerDto);
    expect(customerRepository.createCustomer).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockCustomer);
  });

  it('should update a customer by id', async () => {
    customerRepository.findOne = jest.fn().mockResolvedValue(mockCustomer);

    expect(customerRepository.updateCustomer).not.toHaveBeenCalled();
    const customerId = 'c83aa4e1-1575-468d-8200-3effaf23cf44';
    const result = await service.update(customerId, mockUpdateCustomerDto);

    expect(customerRepository.updateCustomer).toHaveBeenCalledWith(mockCustomer, mockUpdateCustomerDto);
    expect(customerRepository.updateCustomer).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockCustomer);
  });
});
