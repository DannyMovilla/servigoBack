import { CreateDetalleOrdenDto } from 'src/detalle-orden/dto/create-detalle-orden.dto';
import { CreateHistorialEstadoDto } from 'src/historial-estado/dto/create-historial-estado.dto';
import { CreateNotaArchivoDto } from 'src/nota-archivo/dto/create-nota-archivo.dto';

export class OrdenServicio {
  id: string;
  clienteId: string;
  tecnicoId: string;
  detalles: CreateDetalleOrdenDto[];
  estado: string;
  notas: CreateNotaArchivoDto[];
  historialEstados: CreateHistorialEstadoDto[];
  createdAt?: Date;
  updatedAt?: Date;
}
