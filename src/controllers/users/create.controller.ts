import { Request, Response } from 'express';

import { Users } from '../../entities/users.entity';
import { UsersRepository } from '../../repositories';

const createUser = async (req: Request, res: Response) => {
  try {
    const user: Users = await new UsersRepository().saveUser(req.body);

    const { password, ...userToReturn } = user;

    return res.status(201).json(userToReturn);
  } catch (err) {
    if (err.detail && err.detail.includes('already exists')) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    return res.status(409).json({ error: err.message });
  }
};

export default createUser;
