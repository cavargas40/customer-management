/* istanbul ignore file */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Customer } from '../customer/customer.entity';
import { tewtzColumn } from '../database/helpers/column.type';

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn(tewtzColumn)
  createdAt: Date;

  @UpdateDateColumn(tewtzColumn)
  updatedAt: Date;

  @DeleteDateColumn({ ...tewtzColumn, select: false })
  deletedAt: Date;

  @Column()
  description: string;

  @ManyToOne(() => Customer, (customer) => customer.notes, { eager: false })
  customer: Customer;
}
