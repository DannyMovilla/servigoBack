import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private readonly supabaseService: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException({
        message: 'No estás autenticado',
        statusCode: 401,
      });
    }

    const user = await this.supabaseService.validateToken(token as string);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Token inválido o expirado',
        statusCode: 401,
      });
    }

    request.user = user;
    return true;
  }
}
