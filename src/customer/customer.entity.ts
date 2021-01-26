/* istanbul ignore file */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

import { CustomerStatus } from './customer.constants';
import { Note } from '../note/note.entity';
import { tewtzColumn } from '../database/helpers/column.type';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn(tewtzColumn)
  createdAt: Date;

  @UpdateDateColumn(tewtzColumn)
  updatedAt: Date;

  @DeleteDateColumn({ ...tewtzColumn, select: false })
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

  @VersionColumn()
  version: number;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @OneToMany(() => Note, (note) => note.customer, { eager: false })
  notes: Note[];
}
