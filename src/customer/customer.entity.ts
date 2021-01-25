import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CustomerStatus } from './customer.constants';
import { tewtzColumn } from '../database/helpers/column.type';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn(tewtzColumn)
  createdAt: Date;

  @CreateDateColumn(tewtzColumn)
  updatedAt: Date;

  @CreateDateColumn({ ...tewtzColumn, select: false })
  deletedAt: Date;

  @Column({ type: 'varchar' })
  status: CustomerStatus;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
