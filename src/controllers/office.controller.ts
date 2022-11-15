import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
const { Office } = require('../app/db/models');
import jwt from 'jsonwebtoken';
require('dotenv').config();

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

const updateOffice = async (req: Request, res: Response) => {
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
      return res
        .status(404)
        .json({ status: res.statusCode, error: 'Office not found' });
    }
  } catch (error) {
    return res.status(400).json({ status: res.statusCode, error: error });
  }
};

export { getAllOffices, getOffice, newOffice, deleteOffice, updateOffice };
