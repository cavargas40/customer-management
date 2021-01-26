import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  description: string;
}
