import { Module } from '@nestjs/common';
import { MenusService } from './services/menus.service';
import { MenusController } from './controllers/menus.controller';

@Module({
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
