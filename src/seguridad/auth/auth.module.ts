import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { IntranetUsuario } from '../intranet-usuarios/entities/intranet-usuario.entity';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { IntranetUsuariosModule } from '../intranet-usuarios/intranet-usuarios.module';

@Module({
  imports:[
    PassportModule,

    JwtModule.registerAsync({
      useFactory: () => {
        return{
          secret: 'mySecret',
          singnOptions:{
            expireIn:'10d'
          }
        }
      }
    }),

    IntranetUsuariosModule
  ],
  controllers: [AuthController],
  providers: [AuthService, IntranetUsuario, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
