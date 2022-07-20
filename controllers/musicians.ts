import { Request, Response, NextFunction, RequestHandler } from 'express';
import * as Musician from '../models/musician';
import IMusician from '../interfaces/IMusician';
import { ErrorHandler } from '../helpers/errors';
import { formatSortString } from '../helpers/functions';
import Joi from 'joi';

// returns all musicians
const getAllMusicians = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const musicians = await Musician.getAllMusicians();
    res.setHeader(
      'Content-Range',
      `musicians : 0-${musicians.length}/${musicians.length + 1}`
    );
    return res.status(200).json(musicians);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// // get musician by id
const getMusicianById = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idMusician } = req.params;
    const musician = await Musician.getMusicianById(Number(idMusician));
    musician ? res.status(200).json(musician) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// validate musician

const validateMusician = (req: Request, res: Response, next: NextFunction) => {
  let required: Joi.PresenceMode = 'optional';
  if (req.method === 'POST') {
    required = 'required';
  }
  const errors = Joi.object({
    bandname: Joi.string().max(200).presence(required),
    id: Joi.number().optional(), // pour react-admin
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    next(new ErrorHandler(422, errors.message));
  } else {
    next();
  }
};

// ADD MUSICIAN
const addMusician = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const musicianId = await Musician.createMusician(req.body as IMusician);
    if (musicianId) {
      res.status(201).json({ id: musicianId, ...req.body });
    } else {
      throw new ErrorHandler(500, `Musician cannot be added`);
    }
  } catch (err) {
    next(err);
  }
};

export default {
  getAllMusicians,
  getMusicianById,
  validateMusician,
  addMusician,
};
