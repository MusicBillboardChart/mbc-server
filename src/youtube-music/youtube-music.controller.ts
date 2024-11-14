import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FirebaseRepository } from 'src/Firebase/FirebaseRepository';

@ApiTags('YOUTUBE MUSIC')
@Controller()
export class YoutubeMusicController {
  constructor(private firebaseRepository: FirebaseRepository) {
  }
  @ApiOperation({ summary: '유튜브 뮤직 한국 차트 조회' })
  @ApiResponse({ status: 200, description: '유튜브 뮤직 한국 차트 데이터 반환 성공' })
  @Get('youtube-music')
  async getYoutubeMusicChart() {
    return await this.firebaseRepository.getListMusicChart('youtubeMusic');
}
}