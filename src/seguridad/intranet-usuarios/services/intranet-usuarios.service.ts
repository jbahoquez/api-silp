import { Injectable } from '@nestjs/common';
import { CreateIntranetUsuarioDto } from '../dto/create-intranet-usuario.dto';
import { UpdateIntranetUsuarioDto } from '../dto/update-intranet-usuario.dto';
import { IIntranetUsuarios } from 'src/seguridad/interfaces/intranet-usuarios.interface';
import { IntranetUsuario } from '../entities/intranet-usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IntranetUsuariosService {
  constructor(
    @InjectRepository(IntranetUsuario) private readonly intranetUsuarioRepository: Repository<IntranetUsuario>,
  ){}


  create(createIntranetUsuarioDto: CreateIntranetUsuarioDto) {
    return 'This action adds a new intranetUsuario';
  }

  async getUserBy({key,value}:{key :keyof CreateIntranetUsuarioDto, value: string | number}):Promise<IIntranetUsuarios>{
    const user: IIntranetUsuarios = await this.intranetUsuarioRepository.createQueryBuilder('user')
    .where({[key]:value})
    .getOne()
    return user;
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


