import { Injectable } from '@nestjs/common';
import { CreateIntranetUsuarioDto } from '../dto/create-intranet-usuario.dto';
import { UpdateIntranetUsuarioDto } from '../dto/update-intranet-usuario.dto';

@Injectable()
export class IntranetUsuariosService {
  create(createIntranetUsuarioDto: CreateIntranetUsuarioDto) {
    return 'This action adds a new intranetUsuario';
  }

  findAll() {
    return `This action returns all intranetUsuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intranetUsuario`;
  }

  update(id: number, updateIntranetUsuarioDto: UpdateIntranetUsuarioDto) {
    return `This action updates a #${id} intranetUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} intranetUsuario`;
  }
}
