import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  port: Number(process.env.DB_PORT) || 3000,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_DATABASE_NAME,
}));
