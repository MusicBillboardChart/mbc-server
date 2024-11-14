import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FirebaseRepository } from 'src/Firebase/FirebaseRepository';

@ApiTags('VIBE')
@Controller()
export class VibeController {
  constructor(private firebaseRepository: FirebaseRepository) {
  }
  @ApiOperation({ summary: '바이브 차트 조회' })
  @ApiResponse({ status: 200, description: '바이브 차트 데이터 반환 성공' })
  @Get('vibe')
  async getVibeChart() {
    return await this.firebaseRepository.getListMusicChart('vibe');
}
}
