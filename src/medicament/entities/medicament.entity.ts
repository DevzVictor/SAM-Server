import { Patient } from 'src/patient/entities/patient.entity';

export class Medicament {
  id?: string;
  name: string;
  quantity: string;
  repeatHour: number;
  repeatMinutes: number;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
