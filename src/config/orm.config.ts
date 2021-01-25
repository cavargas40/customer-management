import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
  synchronize: false,
  migrationsRun: false,
  migrations: [join(__dirname, '..', 'database', 'migrations', '*.{ts,js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = config;
