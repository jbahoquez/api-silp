import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    descripcion?: string;
    posicion?: number;
    estado?: string;
    url?: string;
    cod_padre?: number;
    icono?: string;
    tipo?: string;
    opcion?: string;
}
