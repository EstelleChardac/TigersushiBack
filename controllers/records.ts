import { Request, Response, NextFunction, RequestHandler } from 'express';
import * as Record from '../models/record';
import IRecord from '../interfaces/IRecord';
import { ErrorHandler } from '../helpers/errors';
import { formatSortString } from '../helpers/functions';
import Joi from 'joi';

// returns all records
const getAllRecords = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const records = await Record.getAllRecords();
    res.setHeader(
      'Content-Range',
      `records : 0-${records.length}/${records.length + 1}`
    );
    return res.status(200).json(records);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// // get record by id
const getRecordById = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idRecord } = req.params;
    const record = await Record.getRecordById(Number(idRecord));
    record ? res.status(200).json(record) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// validate record

const validateRecord = (req: Request, res: Response, next: NextFunction) => {
  let required: Joi.PresenceMode = 'optional';
  if (req.method === 'POST') {
    required = 'required';
  }
  const errors = Joi.object({
    image: Joi.string().max(250),
    title: Joi.string().max(100).presence(required),
    idMusician: Joi.number().presence(required),
    id: Joi.number().optional(), // pour react-admin
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    next(new ErrorHandler(422, errors.message));
  } else {
    next();
  }
};

// ADD record
const addRecord = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recordId = await Record.createRecord(req.body as IRecord);
    if (recordId) {
      res.status(201).json({ id: recordId, ...req.body });
    } else {
      throw new ErrorHandler(500, `record cannot be added`);
    }
  } catch (err) {
    next(err);
  }
};

export default {
  getAllRecords,
  getRecordById,
  validateRecord,
  addRecord,
};
