import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CrudRestModule } from './crud-rest/crud-rest.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UsuarioModule, CrudRestModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
