import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FirebaseRepository } from 'src/Firebase/FirebaseRepository';

@ApiTags('MELON')
@Controller()
export class MelonController {
  constructor(private firebaseRepository: FirebaseRepository) {
  }
  @ApiOperation({ summary: '멜론 차트 조회' })
  @ApiResponse({ status: 200, description: '멜론 차트 데이터 반환 성공' })
  @Get('melon')
  async getMelonChart() {
    return await this.firebaseRepository.getListMusicChart('melon');
}
}