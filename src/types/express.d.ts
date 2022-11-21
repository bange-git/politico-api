import 'express';
import type { User } from '../utils/auth.utils';

declare module 'express' {
  export interface Request {
    user: User;
  }
}
