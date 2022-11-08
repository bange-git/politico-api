import { Router, Request, Response } from 'express';
import { deleteUser, getAllUsers, getUser, login, signUp, updateUser } from '../controllers/user.controller';

const { User } = require('../app/db/models');

const router = Router();

router.get('/', getAllUsers);
router.get('/:user_id', getUser);
router.post('/signup', signUp);
router.post('/login', login);
router.put('/:user_id', updateUser);
router.delete('/:user_id', deleteUser);

/*
const users: User[] = [
  {
    id: 1,
    firstname: 'James',
    lastname: 'Conwell',
    othername: 'Smith',
    email: 'smith@gmail.com',
    phoneNumber: '237699999',
    passportUrl: 'http://passport.com/james',
    isAdmin: false,
  },
  {
    id: 2,
    firstname: 'Peter',
    lastname: 'Conwell',
    othername: 'Smith',
    email: 'smith@gmail.com',
    phoneNumber: '237699999',
    passportUrl: 'http://passport.com/james',
    isAdmin: false,
  },
  {
    id: 3,
    firstname: 'Alfred',
    lastname: 'Conwell',
    othername: 'Smith',
    email: 'smith@gmail.com',
    phoneNumber: '237699999',
    passportUrl: 'http://passport.com/james',
    isAdmin: false,
  },
  {
    id: 4,
    firstname: 'Williams',
    lastname: 'Conwell',
    othername: 'Smith',
    email: 'smith@gmail.com',
    phoneNumber: '237699999',
    passportUrl: 'http://passport.com/james',
    isAdmin: false,
  },
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

router.get('/:user_id', (req: Request, res: Response) => {
  const id = req.params.user_id;
  const user = users[Number(id)];
  try {
    if (user) {
      res.status(200).json({ status: res.statusCode, data: [user] });
    } else {
      res.status(404).json({ status: res.statusCode, error: 'user not found' });
    }
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});

router.put('/:user_id', (req: Request, res: Response) => {
  const id = req.params.user_id;
  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    passportUrl,
    othername,
    isAdmin,
  } = req.body;
  const user = users[Number(id)];
  let newUser;
  try {
    if (user) {
      users.map((item) => {
        if (item.id == Number(id)) {
          item.id = Number(id);
          item.firstname = firstname;
          item.lastname = lastname;
          item.email = email;
          item.phoneNumber = phoneNumber;
          item.passportUrl = passportUrl;
          item.othername = othername;
          item.isAdmin = isAdmin;

          newUser = {
            id,
            firstname,
            lastname,
            email,
            phoneNumber,
            passportUrl,
            othername,
            isAdmin,
          };
        }
      });
      res.status(201).json({ status: res.statusCode, data: users });
    } else {
      res.status(404).json({ status: res.statusCode, error: 'user not found' });
    }
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});

router.delete('/:user_id', (req: Request, res: Response) => {
  const id = req.params.user_id;
  const user = users[Number(id)];
  try {
    if (user) {
      const updatedFilteredlist = users.filter(
        (user) => user.id !== Number(id),
      );
      res
        .status(200)
        .json({ status: res.statusCode, data: updatedFilteredlist });
    } else {
      res
        .status(404)
        .json({ status: res.statusCode, error: 'user does not exist' });
    }
  } catch (error) {
    res.status(400).json({ status: res.statusCode, error: error });
  }
});
*/
export { router };
