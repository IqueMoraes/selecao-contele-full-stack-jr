import { Router } from 'express';
import routesUsers from './users.routes';

const apiRouter = Router();

apiRouter.use('/users', routesUsers);

export default apiRouter;
