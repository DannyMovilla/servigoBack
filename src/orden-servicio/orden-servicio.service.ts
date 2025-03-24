import { Injectable } from '@nestjs/common';
import { CreateOrdenServicioDto } from './dto/create-orden-servicio.dto';
import { UpdateOrdenServicioDto } from './dto/update-orden-servicio.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdenServicioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrdenServicioDto) {
    return await this.prisma.ordenServicio.create({
      data: {
        clienteId: data.clienteId,
        tecnicoId: data.tecnicoId,

        // Crear detalles de la orden
        detalles: {
          create: data.detalles,
        },

        // Crear historial de estados (se inicia con el estado actual)
        historial: {
          create: {
            estado: data.historialEstados[0].estado,
          },
        },

        // Crear notas y archivos si existen
        notas: {
          create: data.notas,
        },
      },
      include: {
        detalles: true,
        historial: true,
        notas: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.ordenServicio.findMany({
      include: { detalles: true, historial: true, notas: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.ordenServicio.findUnique({
      where: { id },
      include: { detalles: true },
    });
  }

  async update(id: string, updateOrdenServicioDto: UpdateOrdenServicioDto) {
    const updateData = Object.fromEntries(
      Object.entries(updateOrdenServicioDto).filter(([, v]) => v !== undefined),
    );

    return await this.prisma.ordenServicio.update({
      where: { id },
      data: updateData,
      include: { detalles: true, historial: true, notas: true },
    });
  }

  async remove(id: string) {
    return await this.prisma.ordenServicio.delete({ where: { id } });
  }
}
