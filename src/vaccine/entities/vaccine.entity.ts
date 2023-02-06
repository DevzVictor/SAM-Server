import { Patient } from 'src/patient/entities/patient.entity';

export class Vaccine {
  id?: string;
  name: string;
  firstDoseDate?: string;
  nextDoseDate?: string;
  comments?: string;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
