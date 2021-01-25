import { Test, TestingModule } from '@nestjs/testing';

import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { mockNoteService } from './note.mock';

describe('NoteController', () => {
  let controller: NoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteController],
      providers: [{ provide: NoteService, useFactory: mockNoteService }],
    }).compile();

    controller = module.get<NoteController>(NoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
