import { Module } from '@nestjs/common';
import { FirebaseModule } from 'src/Firebase/firebase.module';
import { MelonController } from 'src/melon/melon.controller'

@Module({
    imports: [FirebaseModule],
    controllers: [MelonController],
    providers: [],
  })
export class MelonModule {}
