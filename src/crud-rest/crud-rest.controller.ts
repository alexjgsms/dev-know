import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrudRestService } from './crud-rest.service';
import { CreateCrudRestDto } from './dto/create-crud-rest.dto';
import { UpdateCrudRestDto } from './dto/update-crud-rest.dto';

@Controller('crud-rest')
export class CrudRestController {
  constructor(private readonly crudRestService: CrudRestService) {}

  @Post()
  create(@Body() createCrudRestDto: CreateCrudRestDto) {
    return this.crudRestService.create(createCrudRestDto);
  }

  @Get()
  findAll() {
    return this.crudRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudRestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudRestDto: UpdateCrudRestDto) {
    return this.crudRestService.update(+id, updateCrudRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudRestService.remove(+id);
  }
}
