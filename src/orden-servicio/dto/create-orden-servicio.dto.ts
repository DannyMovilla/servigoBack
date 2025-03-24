import { CreateDetalleOrdenDto } from 'src/detalle-orden/dto/create-detalle-orden.dto';
import { CreateHistorialEstadoDto } from 'src/historial-estado/dto/create-historial-estado.dto';
import { CreateNotaArchivoDto } from 'src/nota-archivo/dto/create-nota-archivo.dto';

export class CreateOrdenServicioDto {
  clienteId: string;
  tecnicoId: string;
  detalles: CreateDetalleOrdenDto[];
  notas: CreateNotaArchivoDto[];
  historialEstados: CreateHistorialEstadoDto[];
}
