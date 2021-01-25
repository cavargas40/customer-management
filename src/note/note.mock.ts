import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './note.entity';
import { UpdateNoteDto } from './dto/update-note.dto';
import { mockCustomer } from '../customer/customer.mock';

export const mockNote: Note = {
  id: '89e10d62-a544-449b-b2a2-22ffb08536b0',
  createdAt: new Date('2021-01-25T14:37:51.999Z'),
  updatedAt: new Date('2021-01-25T14:37:51.999Z'),
  description: 'customer quite interested in doing business with us',
  customer: mockCustomer,
} as Note;

export const mockMultipleNotes: Note[] = [
  {
    id: '47cfc1ce-af20-46b0-9f10-464ea13e02d4',
    createdAt: new Date('2021-01-25T17:40:11.541Z'),
    updatedAt: new Date('2021-01-25T17:40:11.541Z'),
    description: 'New customer registered in the system',
  } as Note,
  {
    id: '87f978c9-08e4-4366-8e9f-6eecaf03d8cd',
    createdAt: new Date('2021-01-25T17:40:27.948Z'),
    updatedAt: new Date('2021-01-25T17:40:27.948Z'),
    description: 'Customer really interested in our product',
  } as Note,
  {
    id: 'ab661110-43cb-48e3-9a99-0447397252c0',
    createdAt: new Date('2021-01-25T17:40:38.209Z'),
    updatedAt: new Date('2021-01-25T17:40:38.209Z'),
    description: 'Customer willing to meet us',
  } as Note,
];

export const mockCreateNoteDto: CreateNoteDto = {
  description: 'customer quite interested in doing business with us',
  customerId: '89e10d62-a544-449b-b2a2-22ffb08536b0',
};

export const mockUpdateNoteDto: UpdateNoteDto = {
  description: 'customer moving from the city',
};

export const mockNoteService = () => ({
  getById: jest.fn().mockResolvedValue(mockNote),
  getByCustomerId: jest.fn().mockResolvedValue([mockNote]),
  createForCustomer: jest.fn().mockResolvedValue(mockNote),
  update: jest.fn().mockResolvedValue(mockNote),
  delete: jest.fn().mockResolvedValue(mockNote),
});

export const mockNoteRepository = () => ({
  create: jest.fn().mockResolvedValue(mockNote),
  find: jest.fn().mockResolvedValue([mockNote]),
  findOne: jest.fn().mockResolvedValue(mockNote),
});
