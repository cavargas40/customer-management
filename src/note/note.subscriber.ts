import { Connection, EntitySubscriberInterface, EventSubscriber, UpdateEvent } from 'typeorm';

import { Note } from './note.entity';
import { optimisticLockVersionHandler } from '../database/strategy/optimistic-locking-version';

@EventSubscriber()
export class NoteOptimisticLockingSubscriber implements EntitySubscriberInterface<Note> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Note;
  }

  beforeUpdate(event: UpdateEvent<any>) {
    optimisticLockVersionHandler(event);
  }
}
