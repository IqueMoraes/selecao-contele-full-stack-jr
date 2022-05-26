import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import app from './app';

import dbConfig from './db/ormconfig';

dotenv.config();

createConnection(dbConfig)
  .then(() => {
    const PORT = process.env.PORT ?? 3000;
    console.log('Database connected');

    app.listen(PORT, () => {
      console.log(`App is running on port http:localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
