import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntranetUsuariosModule } from './seguridad/intranet-usuarios/intranet-usuarios.module';
import { PermisosModule } from './seguridad/permisos/permisos.module';
import { PerfilesModule } from './seguridad/perfiles/perfiles.module';
import { MenusModule } from './seguridad/menus/menus.module';
import { AuthModule } from './seguridad/auth/auth.module';
import { RolesModule } from './seguridad/roles/roles.module';
import { TipoTransaccionModule } from './seguridad/tipo-transaccion/tipo-transaccion.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot(DataSourceConfig),
    IntranetUsuariosModule, 
    PermisosModule, 
    PerfilesModule, 
    MenusModule, 
    AuthModule, 
    RolesModule, 
    TipoTransaccionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
