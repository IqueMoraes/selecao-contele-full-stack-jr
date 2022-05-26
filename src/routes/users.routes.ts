import { Router } from 'express';

import {
  createUser,
  deleteUser,
  deleteUsers,
  getOneUser,
  getUsers,
  updateUser,
} from '../controllers';
import { paginateResult } from '../middlewares';

const routesUsers = Router();

routesUsers.get('', paginateResult, getUsers);

routesUsers.get('/:user_id', getOneUser);

routesUsers.post('', createUser);

routesUsers.put('/:user_id', updateUser);

routesUsers.delete('', deleteUsers);

routesUsers.delete('/:user_id', deleteUser);

export default routesUsers;
