import { Test, TestingModule } from '@nestjs/testing';
import { DetalleOrdenController } from './detalle-orden.controller';
import { DetalleOrdenService } from './detalle-orden.service';

describe('DetalleOrdenController', () => {
  let controller: DetalleOrdenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleOrdenController],
      providers: [DetalleOrdenService],
    }).compile();

    controller = module.get<DetalleOrdenController>(DetalleOrdenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
