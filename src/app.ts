import express, { json, Request, Response } from 'express';
import apiRouter from './routes';

const app = express();

app.use(json());
app.use('/api/v1', apiRouter);

export default app;
