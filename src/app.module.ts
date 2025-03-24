import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { OrdenServicioModule } from './orden-servicio/orden-servicio.module';
import { DetalleOrdenModule } from './detalle-orden/detalle-orden.module';
import { HistorialEstadoModule } from './historial-estado/historial-estado.module';
import { NotaArchivoModule } from './nota-archivo/nota-archivo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 👈 Hace que esté disponible en todos los módulos
    }),
    ClientesModule,
    TecnicosModule,
    OrdenServicioModule,
    DetalleOrdenModule,
    HistorialEstadoModule,
    NotaArchivoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
