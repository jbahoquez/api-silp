import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntranetUsuariosService } from '../services/intranet-usuarios.service';
import { CreateIntranetUsuarioDto } from '../dto/create-intranet-usuario.dto';
import { UpdateIntranetUsuarioDto } from '../dto/update-intranet-usuario.dto';

@Controller('intranet-usuarios')
export class IntranetUsuariosController {
  constructor(private readonly intranetUsuariosService: IntranetUsuariosService) {}

  @Post()
  create(@Body() createIntranetUsuarioDto: CreateIntranetUsuarioDto) {
    return this.intranetUsuariosService.create(createIntranetUsuarioDto);
  }

  @Get()
  findAll() {
    return this.intranetUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intranetUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntranetUsuarioDto: UpdateIntranetUsuarioDto) {
    return this.intranetUsuariosService.update(+id, updateIntranetUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intranetUsuariosService.remove(+id);
  }
}
