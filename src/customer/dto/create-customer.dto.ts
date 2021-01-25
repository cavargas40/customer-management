import { IsDefined, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { CustomerStatus } from '../customer.constants';

export class CreateCustomerDto {
  @IsDefined()
  @IsString()
  @MinLength(3, {
    message: 'FirstName is too short',
  })
  @MaxLength(255, {
    message: 'FirstName is too long',
  })
  firstName: string;

  @IsDefined()
  @IsString()
  @MinLength(3, {
    message: 'LastName is too short',
  })
  @MaxLength(255, {
    message: 'LastName is too long',
  })
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsIn([CustomerStatus.CURRENT, CustomerStatus.NON_ACTIVE, CustomerStatus.PROSPECTIVE])
  status: CustomerStatus;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  phoneNumber: string;
}
