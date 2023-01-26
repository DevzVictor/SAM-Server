import { PartialType } from '@nestjs/swagger';
import { CreateMedicamentDto } from './create-medicament.dto';

export class UpdateMedicamentDto extends PartialType(CreateMedicamentDto) {}
