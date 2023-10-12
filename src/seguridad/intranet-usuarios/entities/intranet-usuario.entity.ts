import { Column, Entity, PrimaryColumn } from "typeorm";
import { IIntranetUsuarios } from "../../../seguridad/interfaces/intranet-usuarios.interface";
import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Entity('INTRANET_USUARIOS')
export class IntranetUsuario implements IIntranetUsuarios{

    @PrimaryColumn({type:'varchar2', name:'N_IDE'})
    n_ide:           string;
    
    // @Exclude()
    // @IsNotEmpty()
    // @Column({type: "varchar2"})
    // password:        string;

    // @Column()
    // mail?:           string;

    // @Column()
    // nombre?:         string;

    // @Column()
    // fecha?:          Date | null;

    // @Column()
    // usuario?:        string;

    // @Column()
    // estado?:         string;

    // @Column()
    // peticiones?:     string;

    // @Column()
    // incidentes?:     string;

    // @Column()
    // fecha_password?: Date | null;

    // @Column()
    // fecha_retiro?:   Date | null;

    // @Column()
    // c_emp?:          string;

    // @Column()
    // bloqueado?:      string;

    // @Column()
    // roles_id:        number;

    // @Column()
    // perfiles_id:     number;
    @Exclude()
    @Column({ name: 'PASSWORD', type: 'varchar2', length: 100 })
    password: string;

    @Column({ name: 'MAIL', type: 'varchar2', length: 40, nullable: true })
    mail?: string;

    @Column({ name: 'NOMBRE', type: 'varchar2', length: 70, nullable: true })
    nombre?: string;

    @Column({ name: 'FECHA', type: 'date', nullable: true })
    fecha?: Date | null;

    @Column({ name: 'USUARIO', type: 'varchar2', length: 10, nullable: true })
    usuario?: string;

    @Column({ name: 'ESTADO', type: 'varchar2', length: 1, nullable: true })
    estado?: string;

    @Column({ name: 'PETICIONES', type: 'varchar2', length: 10, nullable: true })
    peticiones?: string;

    @Column({ name: 'INCIDENTES', type: 'varchar2', length: 10, nullable: true })
    incidentes?: string;

    @Column({ name: 'FECHA_PASSWORD', type: 'date', nullable: true })
    fecha_password?: Date | null;

    @Column({ name: 'FECHA_RETIRO', type: 'date', nullable: true })
    fecha_retiro?: Date | null;

    @Column({ name: 'C_EMP', type: 'varchar2', length: 10, nullable: true })
    c_emp?: string;

    @Column({ name: 'BLOQUEADO', type: 'varchar2', length: 1, nullable: true })
    bloqueado?: string;

    @Column({ name: 'ROLES_ID', type: 'number' })
    roles_id: number;

    @Column({ name: 'PERFILES_ID', type: 'number' })
    perfiles_id: number;
}
