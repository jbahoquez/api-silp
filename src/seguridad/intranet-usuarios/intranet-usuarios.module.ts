import { Module } from '@nestjs/common';
import { IntranetUsuariosService } from './services/intranet-usuarios.service';
import { IntranetUsuariosController } from './controllers/intranet-usuarios.controller';

@Module({
  controllers: [IntranetUsuariosController],
  providers: [IntranetUsuariosService],
})
export class IntranetUsuariosModule {}
