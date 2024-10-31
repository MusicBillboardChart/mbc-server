import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from './app.service';
import { MelonController } from './melon/melon.controller';
import { ConfigModule } from '@nestjs/config'
import { FirebaseModule } from './Firebase/firebase.module';
import { MelonModule } from './melon/melon.module';

@Module({
  controllers: [AppController, MelonController],
  providers: [AppService],
  imports : [ConfigModule.forRoot({ cache: true }),FirebaseModule, MelonModule]
})
export class AppModule {}
