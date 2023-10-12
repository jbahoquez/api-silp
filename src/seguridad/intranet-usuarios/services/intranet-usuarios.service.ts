import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIntranetUsuarioDto } from '../dto/create-intranet-usuario.dto';
import { UpdateIntranetUsuarioDto } from '../dto/update-intranet-usuario.dto';
import { IIntranetUsuarios } from 'src/seguridad/interfaces/intranet-usuarios.interface';
import { IntranetUsuario } from '../entities/intranet-usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePasswordIntranetUsuarioDto } from '../dto/update-password-intranet-usuario.dto';
import oracledb from 'oracledb';

@Injectable()
export class IntranetUsuariosService {
  constructor(
    @InjectRepository(IntranetUsuario) private readonly intranetUsuarioRepository: Repository<IntranetUsuario>,
  ) { }


  addUser(createIntranetUsuarioDto: CreateIntranetUsuarioDto) {
    return 'This action adds a new intranetUsuario';
  }

  async getUsers(): Promise<IntranetUsuario[]> {
    const users: IntranetUsuario[]=await this.intranetUsuarioRepository.find();

    return users;
  }

  async getUserById(n_ide: string): Promise<IIntranetUsuarios>{
    const user:IIntranetUsuarios = await this.intranetUsuarioRepository.findOneBy({n_ide:n_ide});

    if (!user) throw new NotFoundException('Resourse not found');
    return user;
  }

  async updateUser(n_ide: string, data: UpdateIntranetUsuarioDto): Promise<IIntranetUsuarios>{
    const existUser: IIntranetUsuarios= await this.getUserById(n_ide);
    if (!existUser) throw new NotFoundException('Resourse not found');
    const user: IIntranetUsuarios = await this.intranetUsuarioRepository.preload({
      n_ide:n_ide,
      ...data
    });
    return await this.intranetUsuarioRepository.save(user);
  }

  async updatePasswordUser(n_ide: string, data: UpdatePasswordIntranetUsuarioDto): Promise<IIntranetUsuarios>{
    const existUser: IIntranetUsuarios= await this.getUserById(n_ide);
    if (!existUser) throw new NotFoundException('Resourse not found');
    const user: IIntranetUsuarios = await this.intranetUsuarioRepository.preload({
      n_ide:n_ide,
      ...data
    });
    return await this.intranetUsuarioRepository.save(user);
  }

  async getUserBy({ key, value }: { key: keyof CreateIntranetUsuarioDto, value: string | number }): Promise<IIntranetUsuarios> {
    const user: IIntranetUsuarios = await this.intranetUsuarioRepository.createQueryBuilder('user')
      .where({ [key]: value })
      .getOne()
    return user;
  }

  async getUserBy1(data: UpdatePasswordIntranetUsuarioDto): Promise<IIntranetUsuarios[]> {
    const v_data = JSON.stringify(data);

    const query = `
    DECLARE
      v_data CLOB;
      v_salida CLOB;
    BEGIN
      v_data := :v_data;
      SP_INTRANET_USUARIOS_CONSULTAR(v_data, v_salida);
      :v_salida := v_salida;
    END;
  `;

    // const user: IIntranetUsuarios = await this.intranetUsuarioRepository.query(
    //   `BEGIN SP_INTRANET_USUARIOS_CONSULTAR(${v_data}, :v_salida); END;`
    // );
    // return user;
    const result = await this.intranetUsuarioRepository.query(query, [v_data, { type: 'CLOB', dir: oracledb.BIND_OUT }]);

  const user: IIntranetUsuarios[] = result[0].v_salida; // Obtén el resultado del procedimiento almacenado

  return user;
  }


}


