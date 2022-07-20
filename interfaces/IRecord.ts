import { RowDataPacket } from 'mysql2';

export default interface IRecord extends RowDataPacket {
  id: number;
  image: string;
  title: string;
  idMusician: number;
}
