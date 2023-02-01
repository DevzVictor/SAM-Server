import { Patient } from 'src/patient/entities/patient.entity';

export class Vaccine {
  id?: string;
  name: string;
  firstDoseDate: Date;
  nextDoseDate: Date;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
