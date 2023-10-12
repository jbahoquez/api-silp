import { PartialType } from '@nestjs/mapped-types';
import { CreateIntranetUsuarioDto } from './create-intranet-usuario.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordIntranetUsuarioDto{
    @IsString()
    @ApiProperty()
    n_ide:           string;
    @IsString()
    @ApiProperty()
    password:        string;
    // fecha_password?: Date | null;
}
