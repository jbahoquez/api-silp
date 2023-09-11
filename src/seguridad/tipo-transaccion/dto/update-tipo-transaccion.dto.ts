import { PartialType } from '@nestjs/swagger';
import { CreateTipoTransaccionDto } from './create-tipo-transaccion.dto';

export class UpdateTipoTransaccionDto extends PartialType(CreateTipoTransaccionDto) {
    descripcion: string;
}
