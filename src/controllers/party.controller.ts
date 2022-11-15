import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
const { Party } = require('../app/db/models');
import jwt from 'jsonwebtoken';
require('dotenv').config();

const getAllParties = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const allParties = await Party.findAll();
  return res.status(200).json({ status: res.statusCode, data: allParties });
};

const getParty = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.party_id;
  const party = await Party.findOne({ where: { id: id } });
  return res.status(200).json({ status: res.statusCode, data: [party] });
};

const newParty = async (req: Request, res: Response): Promise<Response> => {
  const addParty = await Party.create({
    ...req.body,
  });
  return res
    .status(201)
    .json({ status: res.statusCode, data: [{ addParty }] });
};

const deleteParty = async (req: Request, res: Response) => {
  const id = req.params.party_id;
  const party = await Party.findOne({ where: { id } });
  if (party) {
    await party.destroy();
  }
  return res
    .status(200)
    .json({ status: res.statusCode, message: 'Party succesfully deleted' });
};

const updateParty = async (req: Request, res: Response) => {
  const id = req.params.party_id;
  let party = await Party.findOne({ where: { id } });
  const { name, hqAddress, logoUrl, description } = req.body;
  try {
    if (party) {
        party = await party.update({
        name: name || party.name,
        hqAddress: hqAddress || party.hqAddress,
        logoUrl: logoUrl || party.logoUrl,
        description: description || party.description
      });

      return res.status(201).json({ status: res.statusCode, data: [party] });
    } else {
      return res
        .status(404)
        .json({ status: res.statusCode, error: 'Party not found' });
    }
  } catch (error) {
    return res.status(400).json({ status: res.statusCode, error: error });
  }
};

export { getAllParties, getParty, newParty, deleteParty, updateParty };
