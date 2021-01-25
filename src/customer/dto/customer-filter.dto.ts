import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { CustomerFilterAndSortCriteria } from '../customer.constants';
import { SortOrder } from '../../shared/shared.constants';

export class CustomerFilterDto {
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

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  filter: string;

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

  @IsOptional()
  @IsNotEmpty()
  @IsIn([SortOrder.ASC, SortOrder.DESC])
  sortOrder: SortOrder;
}
