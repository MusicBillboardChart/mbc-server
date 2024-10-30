import { Controller, Get } from '@nestjs/common';

@Controller('melon')
export class MelonController {
    @Get()
    getHello(): any {
      console.log(typeof(process.env.DB_URLS));
      return "엄준식";
    }
}
