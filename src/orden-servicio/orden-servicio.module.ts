import { Module } from '@nestjs/common';
import { OrdenServicioService } from './orden-servicio.service';
import { OrdenServicioController } from './orden-servicio.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrdenServicioController],
  providers: [OrdenServicioService, PrismaService],
})
export class OrdenServicioModule {}
