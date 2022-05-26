import { ErrorHandler } from '../services';
import validateEmail from './validateEmail.util';

function checkEmail(email: string) {
    if (typeof (email) !== 'string' || !validateEmail(email)) {
      throw new ErrorHandler(400, 'Invalid email');
    }
  }

export default checkEmail;
