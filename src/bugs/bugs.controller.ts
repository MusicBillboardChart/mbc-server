import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FirebaseRepository } from 'src/Firebase/FirebaseRepository';

@ApiTags('BUGS')
@Controller('bugs')
export class BugsController {
    constructor(private firebaseRepository: FirebaseRepository) {
    }
    @ApiOperation({ summary: '벅스 차트 조회' })
    @ApiResponse({ status: 200, description: '벅스 차트 데이터 반환 성공' })
    @Get()
    async getBugsChart() {
      return await this.firebaseRepository.getListMusicChart('bugs');
  }
}
