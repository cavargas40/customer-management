import { Connection, EntitySubscriberInterface, EventSubscriber, UpdateEvent } from 'typeorm';

import { Customer } from './customer.entity';
import { optimisticLockVersionHandler } from '../database/strategy/optimistic-locking-version';

@EventSubscriber()
export class CustomerOptimisticLockingSubscriber implements EntitySubscriberInterface<Customer> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Customer;
  }

  beforeUpdate(event: UpdateEvent<any>) {
    optimisticLockVersionHandler(event);
  }
}
