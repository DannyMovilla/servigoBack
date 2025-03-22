import { IsString, IsEmail } from '@nestjs/class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string = '';
}
