import { InternalServerErrorException, Logger } from '@nestjs/common';
import { mockCreateCustomerDto, mockCustomer } from './customer.mock';

import { CustomerRepository } from './customer.repository';
import { Test } from '@nestjs/testing';
import { mockLogger } from '../shared/shared.mock';

describe('CustomerRepository', () => {
  let customerRepository: CustomerRepository;
  let save;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CustomerRepository],
    }).compile();

    customerRepository = module.get<CustomerRepository>(CustomerRepository);
    save = jest.fn().mockResolvedValue(undefined);
    customerRepository.create = jest.fn().mockReturnValue({ save });
    customerRepository.update = jest.fn().mockResolvedValue(true);
    customerRepository.findOne = jest.fn().mockResolvedValue(mockCustomer);
  });

  it('should be defined', () => {
    expect(customerRepository).toBeDefined();
  });

  describe('customer creation', () => {
    it('should create successfully a customer', () => {
      expect(customerRepository.create).not.toHaveBeenCalled();

      expect(customerRepository.createCustomer(mockCreateCustomerDto)).resolves.not.toThrow();
      expect(customerRepository.create).toHaveBeenCalled();
      expect(save).toHaveBeenCalled();
    });

    it('should throw and log an error if something happens while creating the customer', async () => {
      save.mockRejectedValue({ message: 'Failed creating the Customer' });
      mockLogger();

      expect(Logger.prototype.error).not.toHaveBeenCalled();
      await expect(customerRepository.createCustomer(mockCreateCustomerDto)).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(Logger.prototype.error).toHaveBeenCalledTimes(1);
    });
  });
});
