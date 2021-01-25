import { CustomerModule } from '../customer/customer.module';
import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteRepository } from './note.repository';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NoteRepository]), CustomerModule],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
