import { Patient } from 'src/patient/entities/patient.entity';

export class Exam {
  id?: string;
  name: string;
  date: Date;
  hour: string;
  lab: string;
  patient?: Patient;
  createdAt?: Date;
  updatedAt?: Date;
}
