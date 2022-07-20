import musiciansController from './controllers/musicians';
import recordsController from './controllers/records';
import { Express } from 'express';

const setupRoutes = (server: Express) => {
  // MUSICIANS //
  // get musicians
  server.get('/api/musicians', musiciansController.getAllMusicians);
  // get musician by id
  server.get('/api/musicians/:idMusician', musiciansController.getMusicianById);
  // // add musician
  server.post(
    '/api/musicians',
    musiciansController.validateMusician,
    musiciansController.addMusician
  );

  // RECORDS //
  server.get('/api/records', recordsController.getAllRecords);
  // get address by id
  server.get('/api/records/:idRecord', recordsController.getRecordById);
  server.post(
    '/api/records',
    recordsController.validateRecord,
    recordsController.addRecord
  );
};

export default setupRoutes;
