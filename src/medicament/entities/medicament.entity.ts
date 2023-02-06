import { Patient } from 'src/patient/entities/patient.entity';

export class Medicament {
  id?: string;
  name: string;
  quantity: string;
  type?: string;
  repeatTime: number;
  comments?: string;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
