import { Module } from '@nestjs/common';
import { PermisosService } from './services/permisos.service';
import { PermisosController } from './controllers/permisos.controller';

@Module({
  controllers: [PermisosController],
  providers: [PermisosService],
})
export class PermisosModule {}
