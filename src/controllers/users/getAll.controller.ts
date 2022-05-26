import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';

const getUsers = async (req: Request, res: Response) => {
  try {
    const results = await new UsersRepository().findUsers(
      req.paginate.page,
      req.paginate.limit,
    );

    const users = results.map((element) => {
      const { password, ...user } = element;
      return user;
    });

    return res.status(200).json({ response: users, navigate_links: req.navlinks });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

const getAllUsers = async (_: Request, res: Response) => {
  try {
    const results = await new UsersRepository().findAllUsers();

    const users = results.map((element) => {
      const { password, ...user } = element;
      return user;
    });

    return res.status(200).json({ response: users });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export { getUsers, getAllUsers };
