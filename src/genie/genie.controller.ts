import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FirebaseRepository } from 'src/Firebase/FirebaseRepository';

@ApiTags('GENIE')
@Controller()
export class GenieController {
  constructor(private firebaseRepository: FirebaseRepository) {
  }
  @ApiOperation({ summary: '지니 차트 조회' })
  @ApiResponse({ status: 200, description: '지니 차트 데이터 반환 성공' })
  @Get('genie')
  async getGenieChart() {
    return await this.firebaseRepository.getListMusicChart('genie');
}
}
