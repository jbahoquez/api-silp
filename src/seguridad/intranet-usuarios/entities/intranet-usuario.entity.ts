import { IIntranetUsuarios } from "../../../seguridad/interfaces/intranet-usuarios.interface";
import { Exclude } from "class-transformer";
export class IntranetUsuario implements IIntranetUsuarios{
    n_ide:           string;
    @Exclude()
    password:        string;
    mail?:           string;
    nombre?:         string;
    fecha?:          Date | null;
    usuario?:        string;
    estado?:         string;
    peticiones?:     string;
    incidentes?:     string;
    fecha_password?: Date | null;
    fecha_retiro?:   Date | null;
    c_emp?:          string;
    bloqueado?:      string;
    salt?:           string;
    roles_id:        number;
    perfiles_id:     number;
}
