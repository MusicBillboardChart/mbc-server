import { Module } from '@nestjs/common';
import { FirebaseModule } from 'src/Firebase/firebase.module';

@Module({
    imports: [FirebaseModule],
    controllers: [],
    providers: [],
  })
export class MelonModule {}
