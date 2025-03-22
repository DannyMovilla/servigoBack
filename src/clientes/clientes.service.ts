import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupabaseService } from 'src/supabase/supabase.service';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    // Crear usuario en Supabase con el rol'cliente'
    await this.supabaseService.createUser(
      createClienteDto.email,
      'Temporal123*',
      'cliente',
    );

    const { nombre, email } = createClienteDto;
    return await this.prisma.cliente.create({
      data: {
        nombre,
        email: email,
      },
    });
  }

  async findAll(): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany();
  }

  async findOne(id: string): Promise<Cliente | null> {
    const cliente = await this.prisma.cliente.findUnique({ where: { id } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  async update(
    id: string,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const { nombre, email } = updateClienteDto;
    return await this.prisma.cliente.update({
      where: { id },
      data: {
        ...(nombre && { nombre }),
        ...(email && { email }),
      },
    });
  }

  async remove(id: string): Promise<Cliente> {
    // Obtener el cliente para extraer su email
    const cliente = await this.prisma.cliente.findUnique({ where: { id } });

    if (!cliente) {
      throw new Error(`Cliente con ID ${id} no encontrado`);
    }

    // Eliminar usuario en Supabase
    await this.supabaseService.deleteUserByEmail(cliente.email);

    return await this.prisma.cliente.delete({
      where: { id },
    });
  }
}
