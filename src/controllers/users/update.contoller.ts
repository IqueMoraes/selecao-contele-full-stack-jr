import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';

const updateUser = async (req: Request, res: Response) => {
  try {
    const data = await new UsersRepository().updateUser(
      { id: req.params.user_id },
      req.body,
    );

    const user = await new UsersRepository().findUser(req.user.id);
    const { password, ...userToReturn } = user;

    return res.status(200).json(userToReturn);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default updateUser;
