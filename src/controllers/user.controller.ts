import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
//const { User } = require('../app/db/models');
import db from '../app/db/models';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const { User } = db;

const signUp = async (req: Request, res: Response): Promise<Response> => {
  const password: string = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await User.create({
    ...req.body,
    password: hashedPassword,
  });
  const token = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d',
  });
  console.log(user);
  return res
    .status(201)
    .json({ status: res.statusCode, data: [{ token: token, user: user }] });
};

const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  console.log(user);
  if (!user) {
    return res.status(400).send('user does not exist');
  }
  try {
    if (user.password && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d',
      });
      console.log(token);
      const decoded: typeof User = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(
        'Decoded ==>',
        decoded,
        decoded.firstname,
      );
      //decoded.
     // console.log('getting the id', decoded
      //const { id, firstname } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      return res
        .status(200)
        .json({ status: res.statusCode, data: [{ token: token, user: user }] });
    } else {
      return res.status(200).json({
        status: res.statusCode,
        message: 'email or password incorrect',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: res.statusCode, error: console.error(error) });
  }
};

const getUser = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.user_id;
  const user = await User.findOne({ where: { id: id } });
  return res.status(200).json({ status: res.statusCode, data: [user] });
};

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await User.findAll();
  return res.status(200).json({ status: res.statusCode, data: allUsers });
};

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.user_id;
  let user = await User.findOne({ where: { id } });
  console.log(user);
  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    passportUrl,
    othername,
    password,
    isAdmin,
  } = req.body;
  try {
    if (user) {
      user = await user.update({
        firstname: firstname || user.firstname,
        lastname: lastname || user.lastname,
        email: email || user.email,
        phoneNumber: phoneNumber || user.phoneNumber,
        passportUrl: passportUrl || user.passportUrl,
        othername: othername || user.othername,
        password: password || user.password,
        isAdmin: isAdmin || user.admin,
      });

      return res.status(201).json({ status: res.statusCode, data: user });
    } else {
      return res
        .status(404)
        .json({ status: res.statusCode, error: 'user not found' });
    }
  } catch (error) {
    return res.status(400).json({ status: res.statusCode, error: error });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.user_id;
  const user = await User.findOne({ where: { id } });
  if (user) {
    await user.destroy();
  }
  return res
    .status(200)
    .json({ status: res.statusCode, message: 'user succesfully deleted' });
};

export { signUp, login, getAllUsers, getUser, updateUser, deleteUser };
