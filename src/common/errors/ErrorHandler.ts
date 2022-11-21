import { Response } from 'express';

export class ErrorHandler extends Error {
  statusCode: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

/**
 * Handle thrown errors
 * @param {object} err
 * @param {object} res
 */
export const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message: error } = err;
  if (statusCode) {
    return res.status(statusCode).send({
      status: statusCode,
      error,
    });
  }
  return res.status(500).send({
    status: 500,
    error:
      error ||
      'An unexpected error occurred while making the request. Please try again.',
  });
};
