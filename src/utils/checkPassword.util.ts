import { ErrorHandler } from '../services';

function checkPassword(password: string) {
  if (typeof (password) !== 'string' || password.length < 6) {
    throw new ErrorHandler(400, 'Password must be a string and have at least 6 characters');
  }
}

export default checkPassword;
