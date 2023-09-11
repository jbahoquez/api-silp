import { IRoles } from "../../../seguridad/interfaces/roles.interface";

export class Role implements IRoles{
    id: number;
    descripcion: string;
}
