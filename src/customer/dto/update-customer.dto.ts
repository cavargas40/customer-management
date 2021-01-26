import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';
import { CustomerStatus } from '../customer.constants';

export class UpdateCustomerDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(3, {
    message: 'FirstName is too short',
  })
  @MaxLength(255, {
    message: 'FirstName is too long',
  })
  firstName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(3, {
    message: 'LastName is too short',
  })
  @MaxLength(255, {
    message: 'LastName is too long',
  })
  lastName: string;

  @ApiPropertyOptional({ name: 'status', enum: CustomerStatus })
  @IsOptional()
  @IsNotEmpty()
  @IsIn([CustomerStatus.CURRENT, CustomerStatus.NON_ACTIVE, CustomerStatus.PROSPECTIVE])
  status: CustomerStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phoneNumber: string;
}
