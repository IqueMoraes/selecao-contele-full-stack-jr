import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';

const updateUser = async (req: Request, res: Response) => {
  try {
    const data = await new UsersRepository().updateUser(
      { id: req.params.user_id },
      req.validated,
    );

    const user = await new UsersRepository().findUser(req.user.id);
    const { password, ...userToReturn } = user;

    return res.status(200).json(userToReturn);
  } catch (err) {
    if (
      err.driverError.routine && err.driverError.routine === 'string_to_uuid'
    ) {
      return res.status(404).json({ error: 'Invalid Id at request path' });
    }
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default updateUser;
