import express, { json, Request, Response } from 'express';

const app = express();

app.use(json());
app.use('/api', (request: Request, response: Response) => {
  return response.status(200).json('Ok');
});

export default app;
