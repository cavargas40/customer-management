import { ConfigModule, ConfigService } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { PgTypeOrmConfigService } from './pg-typeorm-config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PgTypeOrmConfigService,
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
