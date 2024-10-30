import { Test, TestingModule } from '@nestjs/testing';
import { MelonController } from './melon.controller';

describe('MelonController', () => {
  let controller: MelonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MelonController],
    }).compile();

    controller = module.get<MelonController>(MelonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
