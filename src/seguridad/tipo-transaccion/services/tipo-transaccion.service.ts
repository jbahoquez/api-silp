import { Injectable } from '@nestjs/common';
import { CreateTipoTransaccionDto } from '../dto/create-tipo-transaccion.dto';
import { UpdateTipoTransaccionDto } from '../dto/update-tipo-transaccion.dto';

@Injectable()
export class TipoTransaccionService {
  create(createTipoTransaccionDto: CreateTipoTransaccionDto) {
    return 'This action adds a new tipoTransaccion';
  }

  findAll() {
    return `This action returns all tipoTransaccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoTransaccion`;
  }

  update(id: number, updateTipoTransaccionDto: UpdateTipoTransaccionDto) {
    return `This action updates a #${id} tipoTransaccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoTransaccion`;
  }
}
