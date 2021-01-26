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

import { ApiProperty } from '@nestjs/swagger';
import { CustomerStatus } from './customer.constants';
import { Note } from '../note/note.entity';
import { tewtzColumn } from '../database/helpers/column.type';

@Entity()
export class Customer extends BaseEntity {
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
  @Column({ type: 'varchar' })
  status: CustomerStatus;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column({ nullable: true })
  phoneNumber: string;

  @ApiProperty()
  @VersionColumn()
  version: number;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @OneToMany(() => Note, (note) => note.customer, { eager: false })
  notes: Note[];
}
