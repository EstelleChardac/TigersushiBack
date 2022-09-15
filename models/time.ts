import connection from '../db-config';
import ITime from '../interfaces/ITime';

const getTime = async (sortBy = ''): Promise<ITime[]> => {
  let sql = 'SELECT * FROM time';
  if (sortBy) {
    sql += ` ORDER BY ${sortBy}`;
  }
  const results = await connection.promise().query<ITime[]>(sql);
  return results[0];
};

export { getTime };
