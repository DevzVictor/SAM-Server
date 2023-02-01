import { User } from 'src/user/entities/user.entity';

export class Patient {
  id?: string;
  name: string;
  cpf: string;
  bithDate: Date;
  homePhoneNumber1: string;
  homePhoneNumber2: string;
  image: string;
  comments: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
}
