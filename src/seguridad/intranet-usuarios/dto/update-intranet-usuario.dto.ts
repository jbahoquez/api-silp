import { PartialType } from '@nestjs/mapped-types';
import { CreateIntranetUsuarioDto } from './create-intranet-usuario.dto';

export class UpdateIntranetUsuarioDto extends PartialType(CreateIntranetUsuarioDto) {}
