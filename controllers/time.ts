import { Request, Response, NextFunction, RequestHandler } from 'express';
import * as Time from '../models/time';

// returns all musicians
const getTime = (async (req: Request, res: Response, next: NextFunction) => {
  try {
    const time = await Time.getTime();
    res.setHeader(
      'Content-Range',
      `time : 0-${time.length}/${time.length + 1}`
    );
    return res.status(200).json(time);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default {
  getTime,
};
