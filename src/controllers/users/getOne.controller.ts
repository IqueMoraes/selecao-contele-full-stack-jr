import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services';

const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await new UsersRepository().findUser(req.params.user_id);

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }

    const { password, ...userData } = user;
    const responseUser = { ...userData };

    return res.status(200).json({ user: responseUser });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getOneUser;
