import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MelonController } from './melon/melon.controller';
import { MelonService } from './melon/melon.service';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config'
import { firebaseAdminProvider } from './notification/firebase-admin.provider';

@Module({
  controllers: [AppController, MelonController],
  providers: [firebaseAdminProvider ,AppService, MelonService],
  imports : [ConfigModule.forRoot(), NotificationModule]
})
export class AppModule {}
