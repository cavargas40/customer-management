import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
    }),
    DatabaseModule,
    CustomerModule,
  ],
})
export class AppModule {}
