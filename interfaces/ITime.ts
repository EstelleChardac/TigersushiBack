import { RowDataPacket } from 'mysql2';

export default interface ITime extends RowDataPacket {
  id: number;
  time: string;
}
