import { Router } from 'express';

import {
  createUser,
  deleteUser,
  deleteUsers,
  getOneUser,
  getUsers,
  updateUser,
} from '../controllers';
import { checkUser, paginateResult, validateBody } from '../middlewares';

const routesUsers = Router();

routesUsers.get('', paginateResult, getUsers);

routesUsers.get('/:user_id', checkUser, getOneUser);

routesUsers.post('', validateBody, createUser);

routesUsers.put('/:user_id', checkUser, updateUser);

routesUsers.delete('', deleteUsers);

routesUsers.delete('/:user_id', checkUser, deleteUser);

export default routesUsers;
