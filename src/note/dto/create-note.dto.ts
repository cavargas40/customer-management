import { IsDefined, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  description: string;

  @ApiProperty()
  @IsDefined()
  @IsUUID()
  customerId: string;
}
