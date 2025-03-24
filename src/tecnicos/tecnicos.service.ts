import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupabaseService } from 'src/supabase/supabase.service';
import { Tecnico } from './entities/tecnico.entity';

@Injectable()
export class TecnicosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(createTecnicoDto: CreateTecnicoDto): Promise<Tecnico> {
    // Crear usuario en Supabase con el rol
    await this.supabaseService.createUser(
      createTecnicoDto.email,
      'Temporal123*',
      'tecnico',
    );

    const { nombre, email } = createTecnicoDto;
    return await this.prisma.tecnico.create({
      data: {
        nombre,
        email: email,
      },
    });
  }

  async findAll(): Promise<Tecnico[]> {
    return await this.prisma.tecnico.findMany();
  }

  async findOne(id: string): Promise<Tecnico | null> {
    const tecnico = await this.prisma.tecnico.findUnique({ where: { id } });
    if (!tecnico) throw new NotFoundException('Tecnico no encontrado');
    return tecnico;
  }

  async update(
    id: string,
    updateTecnicoDto: UpdateTecnicoDto,
  ): Promise<Tecnico> {
    const { nombre, email } = updateTecnicoDto;
    return await this.prisma.tecnico.update({
      where: { id },
      data: {
        ...(nombre && { nombre }),
        ...(email && { email }),
      },
    });
  }

  async remove(id: string): Promise<Tecnico> {
    // Obtener el tecnico para extraer su email
    const tecnico = await this.prisma.tecnico.findUnique({ where: { id } });

    if (!tecnico) {
      throw new Error(`Tecnico con ID ${id} no encontrado`);
    }

    // Eliminar usuario en Supabase
    await this.supabaseService.deleteUserByEmail(tecnico.email);

    return await this.prisma.tecnico.delete({
      where: { id },
    });
  }
}
