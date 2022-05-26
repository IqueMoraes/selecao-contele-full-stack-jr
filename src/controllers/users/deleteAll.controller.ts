import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services/error.service';

const deleteUsers = async (req: Request, res: Response) => {
  try {
    const users = await new UsersRepository().findAllUsers();
    users.map(async (user) => {
      return await new UsersRepository().deleteUser({id: user.id});
    });

    return res.status(204).json();
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default deleteUsers;
