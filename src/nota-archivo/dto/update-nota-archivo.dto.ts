import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaArchivoDto } from './create-nota-archivo.dto';

export class UpdateNotaArchivoDto extends PartialType(CreateNotaArchivoDto) {}
