import { Test, TestingModule } from '@nestjs/testing';

import { CustomerService } from '../customer/customer.service';
import { NoteRepository } from './note.repository';
import { NoteService } from './note.service';
import { mockCustomerService } from '../customer/customer.mock';
import { mockNoteRepository } from './note.mock';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoteService,
        {
          provide: NoteRepository,
          useFactory: mockNoteRepository,
        },
        {
          provide: CustomerService,
          useFactory: mockCustomerService,
        },
      ],
    }).compile();

    service = module.get<NoteService>(NoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
