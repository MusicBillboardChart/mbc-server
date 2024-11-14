import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeMusicGlobalController } from './youtube-music-global.controller';

describe('YoutubeMusicGlobalController', () => {
  let controller: YoutubeMusicGlobalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeMusicGlobalController],
    }).compile();

    controller = module.get<YoutubeMusicGlobalController>(YoutubeMusicGlobalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
