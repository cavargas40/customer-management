import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get(':id/customer')
  getByCustomerId(@Param('id', ParseUUIDPipe) id: string): Promise<Note[]> {
    return this.noteService.getByCustomerId(id);
  }

  @Post()
  createForCustomer(@Body() dto: CreateNoteDto): Promise<Note> {
    return this.noteService.createForCustomer(dto);
  }

  @Patch(':id')
  updateNote(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateNoteDto): Promise<Note> {
    return this.noteService.update(id, dto);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseUUIDPipe) id: string): Promise<boolean> {
    return this.noteService.delete(id);
  }
}
