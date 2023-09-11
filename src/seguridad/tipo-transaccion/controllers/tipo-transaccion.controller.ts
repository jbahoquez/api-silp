import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoTransaccionService } from '../services/tipo-transaccion.service';
import { CreateTipoTransaccionDto } from '../dto/create-tipo-transaccion.dto';
import { UpdateTipoTransaccionDto } from '../dto/update-tipo-transaccion.dto';

@Controller('tipo-transaccion')
export class TipoTransaccionController {
  constructor(private readonly tipoTransaccionService: TipoTransaccionService) {}

  @Post()
  create(@Body() createTipoTransaccionDto: CreateTipoTransaccionDto) {
    return this.tipoTransaccionService.create(createTipoTransaccionDto);
  }

  @Get()
  findAll() {
    return this.tipoTransaccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoTransaccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoTransaccionDto: UpdateTipoTransaccionDto) {
    return this.tipoTransaccionService.update(+id, updateTipoTransaccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoTransaccionService.remove(+id);
  }
}
