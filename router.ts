import timeController from './controllers/time';
import { Express } from 'express';

const setupRoutes = (server: Express) => {
  // get time
  server.get('/api/time', timeController.getTime);
};

export default setupRoutes;
