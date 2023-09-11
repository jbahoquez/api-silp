import { Module } from '@nestjs/common';
import { TipoTransaccionService } from './services/tipo-transaccion.service';
import { TipoTransaccionController } from './controllers/tipo-transaccion.controller';

@Module({
  controllers: [TipoTransaccionController],
  providers: [TipoTransaccionService],
})
export class TipoTransaccionModule {}
