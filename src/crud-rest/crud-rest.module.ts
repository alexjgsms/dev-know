import { Module } from '@nestjs/common';
import { CrudRestService } from './crud-rest.service';
import { CrudRestController } from './crud-rest.controller';

@Module({
  controllers: [CrudRestController],
  providers: [CrudRestService],
})
export class CrudRestModule {}
