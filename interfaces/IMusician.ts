import { RowDataPacket } from 'mysql2';

export default interface IMusician extends RowDataPacket {
  id: number;
  name: string;
}
