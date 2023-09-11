import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IntranetUsuariosService } from '../../../seguridad/intranet-usuarios/services/intranet-usuarios.service';

@Injectable()
export class AuthService {
  constructor(private readonly _intranetUsuarios: IntranetUsuariosService,
    private readonly jwtService: JwtService) { }

  public async validateUser(username: string, password: string) {
    const user = await this._intranetUsuarios.getUserBy({
      key: 'n_ide',
      value: username
    });

    if (!user) throw new BadRequestException('Resource not fund');
    const match = await bcrypt.compare(password, user.password);
    if (match) return user;

    return null
  }

  generateJWT(user) {
    const payload = { ...user }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
