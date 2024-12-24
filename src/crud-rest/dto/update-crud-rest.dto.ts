import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudRestDto } from './create-crud-rest.dto';

export class UpdateCrudRestDto extends PartialType(CreateCrudRestDto) {}
