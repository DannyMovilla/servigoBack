import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [ClientesController],
  providers: [ClientesService, PrismaService],
})
export class ClientesModule {}
