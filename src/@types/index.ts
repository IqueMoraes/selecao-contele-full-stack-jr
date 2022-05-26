import { Users } from '../entities/users.entity';

interface INavLink {
  next_page: string;
  previous_page?: string;
}

interface IPaginate {
  page: number;
  limit: number;
}

declare global {
  namespace Express {
    interface Request {
      user: Users;
      validated: Users;
      paginate: IPaginate;
      navlinks: INavLink;
    }
  }
}

export { INavLink, IPaginate };
