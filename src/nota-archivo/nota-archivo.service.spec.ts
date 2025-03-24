import { Test, TestingModule } from '@nestjs/testing';
import { NotaArchivoService } from './nota-archivo.service';

describe('NotaArchivoService', () => {
  let service: NotaArchivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaArchivoService],
    }).compile();

    service = module.get<NotaArchivoService>(NotaArchivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
