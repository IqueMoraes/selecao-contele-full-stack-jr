import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services/error.service';

const updateUser = async (req:Request, res:Response) => {
    try {
        const data = await new UsersRepository().updateUser({ id: req.params.user_id }, req.body);
        if (!data.affected) {
            throw new ErrorHandler(404, 'User not found');
        }
        const user = await new UsersRepository().findUser(req.params.user_id);
        const userToReturn = JSON.parse(JSON.stringify(user));
        delete userToReturn.password;

        return res.status(200).json(userToReturn);
    } catch (err) {
        return console.log(err);
        // return res.status(err.statusCode).json({ error: err.message });
    }
};

export default updateUser;
