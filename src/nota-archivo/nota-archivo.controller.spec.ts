import { Test, TestingModule } from '@nestjs/testing';
import { NotaArchivoController } from './nota-archivo.controller';
import { NotaArchivoService } from './nota-archivo.service';

describe('NotaArchivoController', () => {
  let controller: NotaArchivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaArchivoController],
      providers: [NotaArchivoService],
    }).compile();

    controller = module.get<NotaArchivoController>(NotaArchivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
