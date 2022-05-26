import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { INavLink } from '../@types';

dotenv.config();

const paginateResult = (req: Request, _: Response, next: NextFunction) => {
  const page: number = req.query.page ? parseInt(req.query.page as string, 10) : 0;
  const limit: number = req.query.limit ? parseInt(req.query.limit as string, 10) : 15;

  req.paginate = {
    page,
    limit,
  };

  const queryNextPage = `?page=${page + 1}&limit=${limit}`;
  const queryPrevPage = `?page=${page - 1}&limit=${limit}`;
  const navigateLinks: INavLink = { next_page: process.env.REQUEST_URL.concat(queryNextPage) };

  if (page > 0) {
    navigateLinks.previous_page = process.env.REQUEST_URL.concat(queryPrevPage);
  }

  req.navlinks = navigateLinks;
  return next();
};

export default paginateResult;
