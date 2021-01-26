import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

/* istanbul ignore file */
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../customer/customer.entity';
import { tewtzColumn } from '../database/helpers/column.type';

@Entity()
export class Note extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @CreateDateColumn(tewtzColumn)
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn(tewtzColumn)
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ ...tewtzColumn, select: false })
  deletedAt: Date;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @VersionColumn()
  version: number;

  @ManyToOne(() => Customer, (customer) => customer.notes, { eager: false })
  customer: Customer;
}
