import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIntranetUsuarioDto } from '../dto/create-intranet-usuario.dto';
import { UpdateIntranetUsuarioDto } from '../dto/update-intranet-usuario.dto';
import { IIntranetUsuarios } from 'src/seguridad/interfaces/intranet-usuarios.interface';
import { IntranetUsuario } from '../entities/intranet-usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePasswordIntranetUsuarioDto } from '../dto/update-password-intranet-usuario.dto';
import * as  oracledb from 'oracledb';
import { RolesModule } from '../../roles/roles.module';

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

    

    let user: IIntranetUsuarios[] = null
    //let v_salida
    try{
      const v_data = JSON.stringify(data)//`{n_ide:''1143453248'',password:''2223DDD''}`;
      console.log(JSON.stringify(data))
  //   let v_salida;
  //   const query = `
  //   DECLARE
  //     v_data CLOB;
  //     v_salida CLOB;
  //   BEGIN
  //     v_data := :v_data;
  //     PKG_SEGURIDAD.SP_INTRANET_USUARIOS_CONSULTAR(v_data, v_salida);
  //     DBMS_OUTPUT.PUT_LINE('V_SALIDA = ' || V_SALIDA);
  //     :v_salida := v_salida;
  //   END;
  // `;

    // const user: IIntranetUsuarios = await this.intranetUsuarioRepository.query(
    //   `BEGIN SP_INTRANET_USUARIOS_CONSULTAR(${v_data}, :v_salida); END;`
    // );
    // return user;
    // const input={v_data, v_salida}
    // const result = await this.intranetUsuarioRepository.query(query, 
    //   [input]);
    // const oracledb=require("oracledb")
    // const conn= await oracledb.getConnection();

    // const result2 = await conn.execute(
    //   `BEGIN PKG_SEGURIDAD.SP_INTRANET_USUARIOS_CONSULTAR(:v_data, :v_salida); END;`,
    //   [
    //     { name: 'v_data',val: v_data, type: oracledb.CLOB, dir: oracledb.BIND_IN },
    //     { name: 'v_salida',type: oracledb.CLOB, dir: oracledb.BIND_OUT }
    //   ]
    // )


    const connection = await oracledb.getConnection({
      user: 'plasticosta',
      password: 'calidad',
      connectString: `
      (DESCRIPTION = 
        (FAILOVER=ON) 
       (ADDRESS=(PROTOCOL=tcp)(HOST=192.168.162.43)(PORT=1521)) 
            (CONNECT_DATA =
         (SERVICE_NAME =PLAS)
       )
     )
        `,
    });

    // const v_data = JSON.stringify(data); // Tu entrada de datos
    const query = `BEGIN PKG_SEGURIDAD.SP_INTRANET_USUARIOS_CONSULTAR(:v_data, :v_salida); END;`;
    const bindVars = {
      v_data: v_data,
      v_salida: { type: oracledb.CLOB, dir: oracledb.BIND_OUT },
    };
    const result2 = await connection.execute(query, bindVars);
    // await connection.close();
    // const result = await connection.execute(`SELECT * FROM INTRANET_USUARIOS WHERE N_IDE='1143453248'`);
    // await connection.close();
    console.log(result2)
    
    
//     const v_salida: any  = result.outBinds;
// const clobData = await v_salida.getData();
// const clobString = clobData.toString('utf8');
// console.log(clobString)

    const result: any = await this.intranetUsuarioRepository.query(
      `BEGIN PKG_SEGURIDAD.SP_INTRANET_USUARIOS_CONSULTAR(:v_data, :v_salida); END;`,
      [
        { name: 'v_data',val: v_data, type: oracledb.CLOB, dir: oracledb.BIND_IN },
        { name: 'v_salida',type: oracledb.DB_TYPE_CLOB, dir: oracledb.BIND_OUT }
      ]
    )//.then((res)=>console.log(res[0].getRow()));

    // const result: any = await this.intranetUsuarioRepository.query(
    //   `SELECT * FROM INTRANET_USUARIOS WHERE N_IDE='1143453248'`
    // )
    //  console.log(result[0])

     

      




    // const result = await this.intranetUsuarioRepository.query(query,[data,{type: oracledb.STRING, dir: oracledb.BIND_OUT, maxsize:1073741822}]);


  // user = result.v_salida; // Obtén el resultado del procedimiento almacenado
  // console.log(result.outBinds.v_salida)
    }catch (error){
      console.error('Error al ejecutar el procedimiento almacenado:', error);
      return user
    }
    

  return user;
  }


}




