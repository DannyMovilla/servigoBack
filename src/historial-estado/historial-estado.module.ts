import { Module } from '@nestjs/common';
import { HistorialEstadoService } from './historial-estado.service';
import { HistorialEstadoController } from './historial-estado.controller';

@Module({
  controllers: [HistorialEstadoController],
  providers: [HistorialEstadoService],
})
export class HistorialEstadoModule {}
