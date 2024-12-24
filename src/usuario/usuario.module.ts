import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [UsuarioController],
  imports: [DbModule],
})
export class UsuarioModule {}
