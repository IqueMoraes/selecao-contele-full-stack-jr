import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '../repositories';
import { ErrorHandler } from '../services';

const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await new UsersRepository().findUser(req.params.user_id);

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }
    req.user = user;
    return next();
  } catch (err) {
    return err.driverError?.file === 'uuid.c' ? res.status(404).json({ error: 'Invalid Id at request path. It must has UUID format.' }) : res.status(err.statusCode).json({ error: err.message });
  }
};

export default checkUser;
