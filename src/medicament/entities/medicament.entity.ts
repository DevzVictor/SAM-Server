import { Patient } from 'src/patient/entities/patient.entity';

export class Medicament {
  id?: string;
  name: string;
  quantity: string;
  repeatTime: number;
  type?: string;
  comments?: string;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
