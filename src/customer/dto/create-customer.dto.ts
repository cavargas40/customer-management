import { IsDefined, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CustomerStatus } from '../customer.constants';

export class CreateCustomerDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(3, {
    message: 'FirstName is too short',
  })
  @MaxLength(255, {
    message: 'FirstName is too long',
  })
  firstName: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(3, {
    message: 'LastName is too short',
  })
  @MaxLength(255, {
    message: 'LastName is too long',
  })
  lastName: string;

  @ApiProperty({ name: 'status', enum: CustomerStatus })
  @IsOptional()
  @IsNotEmpty()
  @IsIn([CustomerStatus.CURRENT, CustomerStatus.NON_ACTIVE, CustomerStatus.PROSPECTIVE])
  status: CustomerStatus;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  phoneNumber: string;
}
