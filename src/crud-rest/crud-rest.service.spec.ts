import { Test, TestingModule } from '@nestjs/testing';
import { CrudRestService } from './crud-rest.service';

describe('CrudRestService', () => {
  let service: CrudRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudRestService],
    }).compile();

    service = module.get<CrudRestService>(CrudRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
