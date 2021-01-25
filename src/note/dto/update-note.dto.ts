import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateNoteDto {
  @IsDefined()
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  description: string;
}
