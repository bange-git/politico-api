
import type { Response } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../common/errors/ErrorHandler';

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    othername: string;
    email: string;
    isAdmin: boolean;
    password: string;
    phoneNumber: string;
    passportUrl: string;
  }

export type DecodedEmailAccount = {
  userId: number;
  email: string;
}

export const decodeAccessToken = (token: string): User => {
    try {
      return <User>jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (e) {
      throw e;
    }
  };
  
  export const generateAccessToken = (
    user: User,
  ): string => {
    const { id: userId, email } = user;
  
    return jwt.sign(
      {
        userId,
        email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' },
    );
  };