import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntranetUsuariosModule } from './seguridad/intranet-usuarios/intranet-usuarios.module';
import { PermisosModule } from './seguridad/permisos/permisos.module';
import { PerfilesModule } from './seguridad/perfiles/perfiles.module';
import { MenusModule } from './seguridad/menus/menus.module';
import { AuthModule } from './seguridad/auth/auth.module';
import { RolesModule } from './seguridad/roles/roles.module';

@Module({
  imports: [IntranetUsuariosModule, PermisosModule, PerfilesModule, MenusModule, AuthModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
