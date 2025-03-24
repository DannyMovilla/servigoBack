import { Injectable } from '@nestjs/common';
import { CreateNotaArchivoDto } from './dto/create-nota-archivo.dto';
import { UpdateNotaArchivoDto } from './dto/update-nota-archivo.dto';

@Injectable()
export class NotaArchivoService {
  create(createNotaArchivoDto: CreateNotaArchivoDto) {
    return 'This action adds a new notaArchivo';
  }

  findAll() {
    return `This action returns all notaArchivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notaArchivo`;
  }

  update(id: number, updateNotaArchivoDto: UpdateNotaArchivoDto) {
    return `This action updates a #${id} notaArchivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} notaArchivo`;
  }
}
