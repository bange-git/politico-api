import { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
const { Petition } = require('../app/db/models');
import jwt from 'jsonwebtoken';
require('dotenv').config();

const getAllPetitions = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const allPetitions = await Petition.findAll();
  return res.status(200).json({ status: res.statusCode, data: allPetitions });
};

const getPetition = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.Petition_id;
  const petition = await Petition.findOne({ where: { id: id } });
  return res.status(200).json({ status: res.statusCode, data: [Petition] });
};

const newPetition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: userId } = req.user;
    const { body, officeId } = req.body;
    const addPetition = await Petition.create({
      body,
      officeId,
      createdBy: userId
    });
    return res
      .status(201)
      .json({ status: res.statusCode, data: [addPetition] });
  } catch (error) {
    return next(error);
  }
};

const deletePetition = async (req: Request, res: Response) => {
  const id = req.params.Petition_id;
  const petition = await Petition.findOne({ where: { id } });
  if (Petition) {
    await petition.destroy();
  }
  return res
    .status(200)
    .json({ status: res.statusCode, message: 'Petition succesfully deleted' });
};

const updatePetition = async (req: Request, res: Response) => {
  const id = req.params.Petition_id;
  let petition = await Petition.findOne({ where: { id } });
  console.log(Petition);
  const { type, name } = req.body;
  try {
    if (Petition) {
      petition = await petition.update({
        type: type || Petition.type,
        name: name || Petition.name,
      });

      return res.status(201).json({ status: res.statusCode, data: [Petition] });
    } else {
      return res
        .status(404)
        .json({ status: res.statusCode, error: 'Petition not found' });
    }
  } catch (error) {
    return res.status(400).json({ status: res.statusCode, error: error });
  }
};

export {
  getAllPetitions,
  getPetition,
  newPetition,
  deletePetition,
  updatePetition,
};
