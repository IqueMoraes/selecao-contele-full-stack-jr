import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services';

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user: DeleteResult = await new UsersRepository().deleteUser({id: req.user.id});

    return res.status(204).json();
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default deleteUser;
