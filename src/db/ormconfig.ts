import { ConnectionOptions } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const prodConfig = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.*')],
  migrations: [path.join(__dirname, '../migrations/**/*.*')],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
  ssl: { rejectUnauthorized: false },
} as ConnectionOptions;

const devConfig = {
  type: 'postgres',
  host: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.DOCKER_PG,
  port: 5432,
  username: process.env.NODE_ENV === 'development' ? process.env.POSTGRES_LOCAL_USER : process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.ts')],
  migrations: [path.join(__dirname, '../migrations/**/*.ts')],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
  ssl: false,
} as ConnectionOptions;

// eslint-disable-next-line no-nested-ternary
export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
