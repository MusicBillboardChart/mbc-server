import { Test, TestingModule } from '@nestjs/testing';
import { VibeController } from './vibe.controller';

describe('VibeController', () => {
  let controller: VibeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VibeController],
    }).compile();

    controller = module.get<VibeController>(VibeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
