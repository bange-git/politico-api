import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../common/errors/ErrorHandler';
import { decodeAccessToken } from '../utils/auth.utils';

const { User } = require('../app/db/models');

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization.split(' ')[1]; // Bear token => ['Bearer', 'token']

  try {
    const decoded = decodeAccessToken(token);
    if (!decoded) throw new ErrorHandler(401, 'Unauthorized access');

    const user = User.findByPk(decoded.id);
    if (!user) {
      throw new ErrorHandler(404, 'User does not exists');
    }

    req.user = user.toJSON();
    return next();
  } catch (error) {
    return next(error);
  }
};