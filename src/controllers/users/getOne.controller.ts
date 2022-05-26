import { Request, Response } from 'express';

const getOneUser = async (req: Request, res: Response) => {
  try {
    const { password, ...userData } = req.user;
    const userToReturn = { ...userData };

    return res.status(200).json({ user: userToReturn });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getOneUser;
