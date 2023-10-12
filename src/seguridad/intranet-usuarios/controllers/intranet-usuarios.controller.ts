import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { IntranetUsuariosService } from '../services/intranet-usuarios.service';
import { CreateIntranetUsuarioDto } from '../dto/create-intranet-usuario.dto';
import { UpdateIntranetUsuarioDto } from '../dto/update-intranet-usuario.dto';
import { IntranetUsuario } from '../entities/intranet-usuario.entity';
import { UpdatePasswordIntranetUsuarioDto } from '../dto/update-password-intranet-usuario.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/seguridad/auth/guards/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@ApiTags('Intranet-Usuarios')
@Controller('intranet-usuarios')
export class IntranetUsuariosController {
  constructor(private readonly intranetUsuariosService: IntranetUsuariosService) {}

  @Get()
  @ApiResponse({status:200, description: 'User Updated'})
  @ApiResponse({status:404, description: 'Resorses Not Found'})
  getUsers(): Promise<IntranetUsuario[]> {
    return this.intranetUsuariosService.getUsers();
  }

  // @Put('/:n_ide')
  // @ApiResponse({status:200, description: 'User Updated'})
  // @ApiResponse({status:404, description: 'Resorses Not Found'})
  // updateUser(@Body() body: UpdateIntranetUsuarioDto, @Param('n_ide') n_ide: string): Promise<IntranetUsuario>{
  //   return this.intranetUsuariosService.updateUser(n_ide, body);
  // }

  // @Put('/password/:n_ide')
  // @ApiResponse({status:200, description: 'User Updated'})
  // @ApiResponse({status:404, description: 'Resorses Not Found'})
  // updatePasswordUser(@Body() body: UpdatePasswordIntranetUsuarioDto, @Param('n_ide') n_ide: string): Promise<IntranetUsuario>{
  //   return this.intranetUsuariosService.updatePasswordUser(n_ide, body);
  // }

  @Put()
  getUserBy1(@Body() body: UpdatePasswordIntranetUsuarioDto): Promise<IntranetUsuario[]> {
    console.log(body)
    return this.intranetUsuariosService.getUserBy1(body);
  }
  
}
