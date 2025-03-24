import { IsString, IsEmail } from '@nestjs/class-validator';

export class CreateTecnicoDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string = '';
}
