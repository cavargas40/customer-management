import { InternalServerErrorException, Logger } from '@nestjs/common';
import { mockCreateNoteDto, mockNote } from './note.mock';

import { NoteRepository } from './note.repository';
import { Test } from '@nestjs/testing';
import { mockCustomer } from '../customer/customer.mock';
import { mockLogger } from '../shared/shared.mock';

describe('NoteRepository', () => {
  let noteRepository: NoteRepository;
  let save;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NoteRepository],
    }).compile();

    noteRepository = module.get<NoteRepository>(NoteRepository);
    save = jest.fn().mockResolvedValue(undefined);
    noteRepository.create = jest.fn().mockReturnValue({ save });
    noteRepository.update = jest.fn().mockResolvedValue(true);
    noteRepository.findOne = jest.fn().mockResolvedValue(mockNote);
  });

  it('should be defined', () => {
    expect(noteRepository).toBeDefined();
  });

  describe('note creation', () => {
    it('should create successfully a note for a customer', () => {
      expect(noteRepository.create).not.toHaveBeenCalled();

      expect(noteRepository.createForCustomer(mockCustomer, mockCreateNoteDto)).resolves.not.toThrow();
      expect(noteRepository.create).toHaveBeenCalled();
      expect(save).toHaveBeenCalled();
    });

    it('should throw and log an error if something happens while creating a note for a customer', async () => {
      save.mockRejectedValue({ message: 'Failed creating the note for the Customer' });
      mockLogger();

      expect(Logger.prototype.error).not.toHaveBeenCalled();
      await expect(noteRepository.createForCustomer(mockCustomer, mockCreateNoteDto)).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(Logger.prototype.error).toHaveBeenCalledTimes(1);
    });
  });
});
