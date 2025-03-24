import { Module } from '@nestjs/common';
import { TecnicosService } from './tecnicos.service';
import { TecnicosController } from './tecnicos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [ConfigModule, SupabaseModule],
  controllers: [TecnicosController],
  providers: [TecnicosService, PrismaService],
})
export class TecnicosModule {}
