import { Router } from 'express';
import { login, signUp } from '../controllers/user.controller';

const AuthRouter = Router();

AuthRouter.post('/signup', signUp);
AuthRouter.post('/login', login);

export { AuthRouter };
