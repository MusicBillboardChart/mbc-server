import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { FirebaseModule } from './Firebase/firebase.module';
import { MelonModule } from './melon/melon.module';
import { BugsModule } from './bugs/bugs.module';
import { YoutubeMusicModule } from './youtube-music/youtube-music.module';
import { YoutubeMusicGlobalModule } from './youtube-music-global/youtube-music-global.module';
import { GenieController } from './genie/genie.controller';
import { VibeController } from './vibe/vibe.controller';
import { VibeModule } from './vibe/vibe.module';
import { GenieModule } from './genie/genie.module';
import { YoutubeMusicController } from './youtube-music/youtube-music.controller';
import { YoutubeMusicGlobalController } from './youtube-music-global/youtube-music-global.controller';
import { MelonController } from './melon/melon.controller';

@Module({
  controllers: [AppController, MelonController, GenieController, VibeController, YoutubeMusicController, YoutubeMusicGlobalController],
  providers: [AppService],
  imports : [ConfigModule.forRoot({ cache: true }),FirebaseModule, MelonModule, BugsModule, YoutubeMusicModule, YoutubeMusicGlobalModule, VibeModule, GenieModule]
})
export class AppModule {}
