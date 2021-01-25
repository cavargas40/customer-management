import { Logger } from '@nestjs/common';

export const mockLogger = () => {
  Logger.prototype.error = jest.fn();
  Logger.prototype.warn = jest.fn();
  Logger.prototype.log = jest.fn();
  Logger.prototype.verbose = jest.fn();
};
