import { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import models from '../app/db/models';
import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../common/errors/ErrorHandler';
require('dotenv').config();

const { Candidate, Office } = models;

const getAllOffices = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const allOffices = await Office.findAll();
  return res.status(200).json({ status: res.statusCode, data: allOffices });
};

const getOffice = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.office_id;
  const office = await Office.findOne({ where: { id: id } });
  return res.status(200).json({ status: res.statusCode, data: [office] });
};

const newOffice = async (req: Request, res: Response): Promise<Response> => {
  const addOffice = await Office.create({
    ...req.body,
  });
  return res
    .status(201)
    .json({ status: res.statusCode, data: [{ addOffice }] });
};

const newCandidate = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> => {
  const id = req.params.user_id;
  const { officeId, partyId } = req.body;

  try {
    const candidate = await Candidate.create({
      officeId,
      userId: id,
      partyId,
    });

    return res.status(201).json({ status: res.statusCode, data: candidate });
  } catch (error) {
    next(error);
  }
};

const deleteOffice = async (req: Request, res: Response) => {
  const id = req.params.office_id;
  const office = await Office.findOne({ where: { id } });
  if (office) {
    await office.destroy();
  }
  return res
    .status(200)
    .json({ status: res.statusCode, message: 'office succesfully deleted' });
};

const updateOffice = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.office_id;
  let office = await Office.findOne({ where: { id } });
  console.log(office);
  const { type, name } = req.body;
  try {
    if (office) {
      office = await office.update({
        type: type || office.type,
        name: name || office.name,
      });

      return res.status(201).json({ status: res.statusCode, data: [office] });
    } else {
      throw new ErrorHandler(res.statusCode, 'Office not found');
    }
  } catch (error) {
    return next(error);
  }
};

export {
  getAllOffices,
  getOffice,
  newOffice,
  deleteOffice,
  updateOffice,
  newCandidate,
};
