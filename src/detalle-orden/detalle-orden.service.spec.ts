import { Test, TestingModule } from '@nestjs/testing';
import { DetalleOrdenService } from './detalle-orden.service';

describe('DetalleOrdenService', () => {
  let service: DetalleOrdenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleOrdenService],
    }).compile();

    service = module.get<DetalleOrdenService>(DetalleOrdenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
