import { Test, TestingModule } from '@nestjs/testing';
import { CrudRestController } from './crud-rest.controller';
import { CrudRestService } from './crud-rest.service';

describe('CrudRestController', () => {
  let controller: CrudRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudRestController],
      providers: [CrudRestService],
    }).compile();

    controller = module.get<CrudRestController>(CrudRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
