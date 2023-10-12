import { Module } from '@nestjs/common';
import { IntranetUsuariosService } from './services/intranet-usuarios.service';
import { IntranetUsuariosController } from './controllers/intranet-usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntranetUsuario } from './entities/intranet-usuario.entity';

@Module({
  controllers: [IntranetUsuariosController],
  providers: [IntranetUsuariosService],
  imports:[
    TypeOrmModule.forFeature([
      IntranetUsuario
    ])
  ],
  exports:[IntranetUsuariosService, TypeOrmModule]
})
export class IntranetUsuariosModule {}
