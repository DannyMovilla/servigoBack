import { Module } from '@nestjs/common';
import { DetalleOrdenService } from './detalle-orden.service';
import { DetalleOrdenController } from './detalle-orden.controller';

@Module({
  controllers: [DetalleOrdenController],
  providers: [DetalleOrdenService],
})
export class DetalleOrdenModule {}
