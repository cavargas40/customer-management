import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './customer.entity';
import { CustomerStatus } from './customer.constants';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { mockNote } from '../note/note.mock';

export const mockCustomer: Customer = {
  id: '89e10d62-a544-449b-b2a2-22ffb08536b0',
  createdAt: new Date('2021-01-25T14:37:51.999Z'),
  updatedAt: new Date('2021-01-25T14:37:51.999Z'),
  status: CustomerStatus.PROSPECTIVE,
  firstName: 'Carlos',
  lastName: 'Vargas',
  email: 'cavargas40@gmail.com',
  phoneNumber: '(57) 301 352 77 74',
} as Customer;

export const mockCreateCustomerDto: CreateCustomerDto = {
  firstName: 'Carlos',
  lastName: 'Vargas',
  email: 'cavargas40@gmail.com',
  phoneNumber: '(57) 301 352 77 74',
} as CreateCustomerDto;

export const mockUpdateCustomerDto: UpdateCustomerDto = {
  status: CustomerStatus.NON_ACTIVE,
} as UpdateCustomerDto;

export const mockCustomerService = () => ({
  getAll: jest.fn().mockResolvedValue([mockCustomer]),
  getById: jest.fn().mockResolvedValue(mockCustomer),
  getByEmail: jest.fn().mockResolvedValue(mockCustomer),
  create: jest.fn().mockResolvedValue(mockCustomer),
  update: jest.fn().mockResolvedValue(mockCustomer),
});

export const mockCustomerRepository = () => ({
  createCustomer: jest.fn().mockResolvedValue(mockCustomer),
  updateCustomer: jest.fn().mockResolvedValue(mockCustomer),
  findOne: jest.fn().mockResolvedValue(mockCustomer),
  getByIdWithNotes: jest.fn().mockResolvedValue(mockCustomer),
});
