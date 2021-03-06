import { CustomerController } from './customer.controller';
import { CustomerOptimisticLockingSubscriber } from './customer.subscriber';
import { CustomerRepository } from './customer.repository';
import { CustomerService } from './customer.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerRepository])],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerOptimisticLockingSubscriber],
  exports: [CustomerService],
})
export class CustomerModule {}
