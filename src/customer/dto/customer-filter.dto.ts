import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';
import { CustomerFilterAndSortCriteria } from '../customer.constants';
import { SortOrder } from '../../shared/shared.constants';

export class CustomerFilterDto {
  @ApiPropertyOptional({ name: 'filterCriteria', enum: CustomerFilterAndSortCriteria })
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  filter: string;

  @ApiPropertyOptional({ name: 'sortCriteria', enum: CustomerFilterAndSortCriteria,  })
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

  @ApiPropertyOptional({ name: 'sortOrder', enum: SortOrder })
  @IsOptional()
  @IsNotEmpty()
  @IsIn([SortOrder.ASC, SortOrder.DESC])
  sortOrder: SortOrder;
}
