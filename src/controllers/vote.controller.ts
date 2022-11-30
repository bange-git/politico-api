import { NextFunction, Request, Response } from "express";
const { Vote } = require('../app/db/models');



const createVote = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = req.user;
      console.log(userId);
      const { officeId, candidateId } = req.body;
      const vote = await Vote.create({
        officeId,
        candidateId,
        createdBy: userId
      });
      return res
        .status(201)
        .json({ status: res.statusCode, data: [vote] });
    } catch (error) {
      return next(error);
    }
  };

export {createVote};