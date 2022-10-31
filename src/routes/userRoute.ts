import { Router, Request, Response } from 'express';

const router = Router();

interface User {
  name: string;
  age: number;
}
const users: User[] = [
  { name: 'james', age: 37 },
  { name: 'susan', age: 87 },
  { name: 'alfred', age: 56 },
];

router.get('/', (req: Request, res: Response) => {
  res.send(users);
});

router.post('/create', (req: Request, res: Response) => {
  const newUser = req.body;
  users.push(newUser);
  try {
    res.status(201).json({ status: res.statusCode, data: users });
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: 'bad request' });
  }
});

export { router };
