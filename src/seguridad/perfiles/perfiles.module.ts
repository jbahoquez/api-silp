import { Module } from '@nestjs/common';
import { PerfilesService } from './services/perfiles.service';
import { PerfilesController } from './controllers/perfiles.controller';

@Module({
  controllers: [PerfilesController],
  providers: [PerfilesService],
})
export class PerfilesModule {}
