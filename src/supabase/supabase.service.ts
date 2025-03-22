import { Injectable } from '@nestjs/common';
import {
  createClient,
  SupabaseClient,
  UserResponse,
} from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_SERVICE_ROLE');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'Missing Supabase configuration. Please check your environment variables.',
      );
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async createUser(
    email: string,
    password: string,
    role: string,
  ): Promise<UserResponse> {
    const response = await this.supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role },
    });

    if (response.error) {
      throw new Error(
        `Error creando usuario en Supabase: ${response.error.message}`,
      );
    }

    // Asignar el rol al usuario en la base de datos
    await this.supabase
      .from('auth.users')
      .update({ role })
      .eq('id', response.data.user.id);

    return response;
  }

  async deleteUserByEmail(email: string): Promise<void> {
    // Obtener la lista de usuarios
    const { data, error } = await this.supabase.auth.admin.listUsers();

    if (error) {
      throw new Error(
        `Error obteniendo usuarios de Supabase: ${error.message}`,
      );
    }

    // Buscar usuario por email
    const usuarioSupabase = data.users.find((user) => user.email === email);

    if (!usuarioSupabase) {
      console.warn(`Usuario con email ${email} no encontrado en Supabase.`);
      return;
    }

    // Eliminar usuario en Supabase
    const { error: deleteError } = await this.supabase.auth.admin.deleteUser(
      usuarioSupabase.id,
    );

    if (deleteError) {
      throw new Error(
        `Error eliminando usuario en Supabase: ${deleteError.message}`,
      );
    }
  }

  async validateToken(token: string) {
    const { data, error } = await this.supabase.auth.getUser(token);
    if (error) {
      return null;
    }
    return data.user;
  }
}
