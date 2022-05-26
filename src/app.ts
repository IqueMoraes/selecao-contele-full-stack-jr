import express, {
  json,
  NextFunction,
  Request,
  Response,
} from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import apiRouter from './routes';
import { handleError } from './services';

const app = express();

app.use(json());
app.use('/api/documentation', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
app.use('/api/v1', apiRouter);
app.use((err, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

export default app;
