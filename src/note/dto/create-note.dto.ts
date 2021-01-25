import { IsDefined, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsDefined()
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  description: string;

  @IsDefined()
  @IsUUID()
  customerId: string;
}
