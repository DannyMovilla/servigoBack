import { Module } from '@nestjs/common';
import { NotaArchivoService } from './nota-archivo.service';
import { NotaArchivoController } from './nota-archivo.controller';

@Module({
  controllers: [NotaArchivoController],
  providers: [NotaArchivoService],
})
export class NotaArchivoModule {}
