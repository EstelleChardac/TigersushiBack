import { ResultSetHeader } from 'mysql2';
import connection from '../db-config';
import IMusician from '../interfaces/IMusician';

const getAllMusicians = async (sortBy = ''): Promise<IMusician[]> => {
  let sql = 'SELECT * FROM musicians';
  if (sortBy) {
    sql += ` ORDER BY ${sortBy}`;
  }
  const results = await connection.promise().query<IMusician[]>(sql);
  return results[0];
};

const getMusicianById = async (idMusician: number): Promise<IMusician> => {
  const [results] = await connection
    .promise()
    .query<IMusician[]>('SELECT * FROM musicians WHERE id = ?', [idMusician]);
  return results[0];
};

const createMusician = async (musician: IMusician) => {
  const results = await connection
    .promise()
    .query<ResultSetHeader>('INSERT INTO musicians (bandname) VALUES(?)', [
      musician.bandname,
    ]);
  // console.log(results);
  // sends the created id
  return results[0].insertId;
};

export { getAllMusicians, getMusicianById, createMusician };
