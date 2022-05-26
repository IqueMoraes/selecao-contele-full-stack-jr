import { NextFunction, Request, Response } from 'express';
import { hashSync } from 'bcrypt';

import { ErrorHandler } from '../services';
import { checkEmail, checkPassword } from '../utils';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const {email, password} = req.body;

  if (req.method === 'POST') {
    if (!email) throw new ErrorHandler(400, 'There is missing key "email"');
    if (!password) throw new ErrorHandler(400, 'There is missing key "password"');

    checkEmail(email);
    checkPassword(password);

    req.body.password = hashSync(password, 10);
    return next();
  }

  if (email) {
    checkEmail(email);
  }
  if (password) {
    checkPassword(password);
    req.body.password = hashSync(password, 10);
  }
  return next();
};

export default validateBody;
