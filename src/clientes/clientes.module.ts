import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { APP_GUARD } from '@nestjs/core';
import { SupabaseAuthGuard } from 'src/supabase/supabase-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, SupabaseModule],
  controllers: [ClientesController],
  providers: [
    ClientesService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: SupabaseAuthGuard,
    },
  ],
})
export class ClientesModule {}
