import { Module } from '@nestjs/common';
import { BugsController } from './bugs.controller';
import { FirebaseModule } from 'src/Firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  controllers: [BugsController]
})
export class BugsModule {}
