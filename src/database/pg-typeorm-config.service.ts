import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConfigService } from '@nestjs/config';
import { DatabaseType } from './database.constants';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class PgTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: DatabaseType.PG,
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      database: this.configService.get<string>('database.db'),
      username: this.configService.get<string>('database.user'),
      password: this.configService.get<string>('database.password'),
      entities: [__dirname + '../../**/*.entity.{ts,js}'],
      logging: false,
      synchronize: false,
      migrationsRun: true,
      migrations: [join(__dirname, 'migrations', '**', '*.{ts,js}')],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
    };
  }
}
