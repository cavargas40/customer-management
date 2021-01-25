import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';

import { CreateNoteDto } from './dto/create-note.dto';
import { Customer } from '../customer/customer.entity';
import { Note } from './note.entity';
import { UpdateNoteDto } from './dto/update-note.dto';

@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {
  private logger = new Logger(NoteRepository.name);

  async createForCustomer(customer: Customer, dto: CreateNoteDto): Promise<Note> {
    const { description } = dto;
    const note = this.create();
    note.description = description;
    note.customer = customer;

    try {
      await note.save();

      return note;
    } catch (error) {
      const msg = `An error has occured creating the note for the customer with email ${customer.email}. ${error.message}`;
      this.logger.error(msg, error.stack);
      throw new InternalServerErrorException(msg);
    }
  }

  async updateNote(note: Note, dto: UpdateNoteDto) {
    const { description } = dto;
    note.description = description;

    try {
      await note.save();

      return note;
    } catch (error) {
      const msg = `An error has occured updating the note with id ${note.id}. ${error.message}`;
      this.logger.error(msg, error.stack);
      throw new InternalServerErrorException(msg);
    }
  }
}
