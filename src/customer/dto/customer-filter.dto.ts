import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CustomerFilterAndSortCriteria } from '../customer.constants';
import { SortOrder } from '../../shared/shared.constants';

export class CustomerFilterDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsIn([
    CustomerFilterAndSortCriteria.CREATED_AT,
    CustomerFilterAndSortCriteria.UPDATED_AT,
    CustomerFilterAndSortCriteria.STATUS,
    CustomerFilterAndSortCriteria.FIRST_NAME,
    CustomerFilterAndSortCriteria.LAST_NAME,
    CustomerFilterAndSortCriteria.EMAIL,
    CustomerFilterAndSortCriteria.PHONE_NUMBER,
  ])
  filterCriteria: CustomerFilterAndSortCriteria;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  filter: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsIn([
    CustomerFilterAndSortCriteria.CREATED_AT,
    CustomerFilterAndSortCriteria.UPDATED_AT,
    CustomerFilterAndSortCriteria.STATUS,
    CustomerFilterAndSortCriteria.FIRST_NAME,
    CustomerFilterAndSortCriteria.LAST_NAME,
    CustomerFilterAndSortCriteria.EMAIL,
    CustomerFilterAndSortCriteria.PHONE_NUMBER,
  ])
  sortCriteria: CustomerFilterAndSortCriteria;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsIn([SortOrder.ASC, SortOrder.DESC])
  sortOrder: SortOrder;
}
