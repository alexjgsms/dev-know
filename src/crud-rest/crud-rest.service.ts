import { Injectable } from '@nestjs/common';
import { CreateCrudRestDto } from './dto/create-crud-rest.dto';
import { UpdateCrudRestDto } from './dto/update-crud-rest.dto';

@Injectable()
export class CrudRestService {
  create(createCrudRestDto: CreateCrudRestDto) {
    return 'This action adds a new crudRest';
  }

  findAll() {
    return `This action returns all crudRest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudRest`;
  }

  update(id: number, updateCrudRestDto: UpdateCrudRestDto) {
    return `This action updates a #${id} crudRest`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudRest`;
  }
}
