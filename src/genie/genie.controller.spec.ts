import { Test, TestingModule } from '@nestjs/testing';
import { GenieController } from './genie.controller';

describe('GenieController', () => {
  let controller: GenieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenieController],
    }).compile();

    controller = module.get<GenieController>(GenieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
