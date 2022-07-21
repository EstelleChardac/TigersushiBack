import connection from '../db-config.js';
import { ResultSetHeader } from 'mysql2';
import IRecord from '../interfaces/IRecord';

const getAllRecords = async (sortBy = ''): Promise<IRecord[]> => {
  let sql =
    'SELECT * FROM records INNER JOIN musicians ON records.idMusician = musicians.id';
  if (sortBy) {
    sql += ` ORDER BY ${sortBy}`;
  }
  const results = await connection.promise().query<IRecord[]>(sql);
  return results[0];
};

const getRecordById = async (idRecord: number): Promise<IRecord> => {
  const [results] = await connection
    .promise()
    .query<IRecord[]>(
      'SELECT * FROM records INNER JOIN musicians ON records.idMusician = musicians.id WHERE records.id = ?',
      [idRecord]
    );
  return results[0];
};

const createRecord = async (record: IRecord) => {
  const results = await connection
    .promise()
    .query<ResultSetHeader>(
      'INSERT INTO records (image, title, idMusician) VALUES(?, ?, ?)',
      [record.image, record.title, record.idMusician]
    );
  // console.log(results);
  // sends the created id
  return results[0].insertId;
};

export { getAllRecords, getRecordById, createRecord };
