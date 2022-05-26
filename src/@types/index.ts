import { Users } from '../entities/users.entity';

interface INavLink {
  next_page: string;
  previous_page?: string;
}

interface IPaginate {
  page: number;
  limit: number;
}
interface IValidate {
  email?: string;
  password?: string;
}
declare global {
  namespace Express {
    interface Request {
      user: Users;
      validated: IValidate;
      paginate: IPaginate;
      navlinks: INavLink;
    }
  }
}

export { INavLink, IPaginate, IValidate };
