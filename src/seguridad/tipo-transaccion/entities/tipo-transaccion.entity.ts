import { ITipoTransaccion } from "../../../seguridad/interfaces/tipo-transaccion.interface";

export class TipoTransaccion implements ITipoTransaccion{
    id: number;
    descripcion: string;
}
