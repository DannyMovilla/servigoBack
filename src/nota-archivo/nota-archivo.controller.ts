import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotaArchivoService } from './nota-archivo.service';
import { CreateNotaArchivoDto } from './dto/create-nota-archivo.dto';
import { UpdateNotaArchivoDto } from './dto/update-nota-archivo.dto';

@Controller('nota-archivo')
export class NotaArchivoController {
  constructor(private readonly notaArchivoService: NotaArchivoService) {}

  @Post()
  create(@Body() createNotaArchivoDto: CreateNotaArchivoDto) {
    return this.notaArchivoService.create(createNotaArchivoDto);
  }

  @Get()
  findAll() {
    return this.notaArchivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notaArchivoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotaArchivoDto: UpdateNotaArchivoDto,
  ) {
    return this.notaArchivoService.update(+id, updateNotaArchivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notaArchivoService.remove(+id);
  }
}
