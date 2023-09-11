import { PartialType } from '@nestjs/mapped-types';
import { CreatePermisoDto } from './create-permiso.dto';

export class UpdatePermisoDto extends PartialType(CreatePermisoDto) {
    c_emp?: string;
    planta?: string;
    codigo?: string;
    descripcion?: string;
    tipo_transaccion_id: number;
}
