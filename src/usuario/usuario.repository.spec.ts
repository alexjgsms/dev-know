import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioRepository } from './usuario.repository';

describe('UsuarioRepository', () => {
  let provider: UsuarioRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioRepository],
    }).compile();

    provider = module.get<UsuarioRepository>(UsuarioRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
