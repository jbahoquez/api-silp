import { PartialType } from '@nestjs/mapped-types';
import { CreateIntranetUsuarioDto } from './create-intranet-usuario.dto';

export class UpdateIntranetUsuarioDto extends PartialType(CreateIntranetUsuarioDto) {
    n_ide:           string;
    // password:        string;
    mail?:           string;
    nombre?:         string;
    estado?:         string;
    peticiones?:     string;
    incidentes?:     string;
    // fecha_password?: Date | null;
    fecha_retiro?:   Date | null;
    roles_id:        number;
    perfiles_id:     number;
}
