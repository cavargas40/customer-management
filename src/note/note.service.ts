import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from '../customer/customer.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NoteRepository } from './note.repository';

@Injectable()
export class NoteService {
  private logger = new Logger(NoteService.name);

  constructor(
    @InjectRepository(NoteRepository)
    private noteRespository: NoteRepository,
    private customerService: CustomerService,
  ) {}

  async getById(id: string): Promise<Note> {
    const note = await this.noteRespository.findOne({ where: { id } });

    if (!note) {
      throw new NotFoundException(`note with id '${id}' not found.`);
    }

    return note;
  }

  async getByCustomerId(customerId: string): Promise<Note[]> {
    const customer = await this.customerService.getById(customerId);

    return this.noteRespository.find({ where: { customer } });
  }

  async createForCustomer(dto: CreateNoteDto): Promise<Note> {
    const { customerId } = dto;
    const customer = await this.customerService.getById(customerId, []);

    return this.noteRespository.createForCustomer(customer, dto);
  }

  async update(id: string, dto: UpdateNoteDto): Promise<Note> {
    const note = await this.getById(id);

    return this.noteRespository.updateNote(note, dto);
  }

  async delete(id: string): Promise<boolean> {
    const note = await this.getById(id);

    try {
      await note.softRemove();

      return true;
    } catch (error) {
      const msg = `An error has occurred deleting the note with id ${id}. ${error.message}`;
      this.logger.error(msg, error.stack);
      throw new InternalServerErrorException(msg);
    }
  }
}
