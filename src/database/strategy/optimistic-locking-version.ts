import { UpdateEvent } from 'typeorm';

export const optimisticLockVersionHandler = (event: UpdateEvent<any>) => {
  if (event.metadata.versionColumn) {
    const versionFromUpdate = Reflect.get(event.entity, event.metadata.versionColumn.propertyName);

    const versionFromDatabase = event.databaseEntity[event.metadata.versionColumn.propertyName];

    if (versionFromDatabase !== versionFromUpdate) {
      throw new OptimisticLockingVersionError(event.entity, versionFromUpdate, versionFromDatabase);
    }
  }
};

export class OptimisticLockingVersionError extends Error {
  name = 'OptimisticLockingVersionError';

  constructor(entity: string, expectedVersion: number, actualVersion: number) {
    super();
    Reflect.setPrototypeOf(this, OptimisticLockingVersionError.prototype);
    this.message = `The optimistic lock on entity ${entity} failed, version ${expectedVersion} was expected, but is actually ${actualVersion}.`;
  }
}
