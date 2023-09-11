import { IPermisos } from "../../../seguridad/interfaces/permisos.interface";

export class Permiso implements IPermisos{
    id: number;
    c_emp?: string;
    planta?: string;
    codigo?: string;
    descripcion?: string;
    tipo_transaccion_id: number;
}
