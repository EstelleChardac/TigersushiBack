import musiciansController from './controllers/musicians';
import recordsController from './controllers/records';
import { Express } from 'express';

const setupRoutes = (server: Express) => {
  // Musicians
  // get musicians
  server.get('/api/musicians', musiciansController.getAllMusicians);
  // get address by id
  server.get('/api/musicians/:idMusician', musiciansController.getMusicianById);

  server.get('/api/records', recordsController.getAllRecords);
  // get address by id
  server.get('/api/records/:idRecord', recordsController.getRecordById);
};

export default setupRoutes;
