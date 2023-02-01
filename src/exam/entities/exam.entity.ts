import { Patient } from 'src/patient/entities/patient.entity';

export class Exam {
  id?: string;
  name: string;
  date: string;
  hour: string;
  lab: string;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
