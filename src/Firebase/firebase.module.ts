import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { FirebaseRepository } from './FirebaseRepository';

const firebaseProvider = {
  provide: 'FIREBASE_APP',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    console.log('Current Database URL:', configService.get('DB_URLS')); 
    const firebaseConfig = {
      type: configService.get('type'),
      project_id: configService.get('project_id'),
      private_key_id: configService.get('private_key_id'),
      private_key: configService.get('private_key').replace(/\\n/g, '\n'),
      client_email: configService.get('client_email'),
      client_id: configService.get('client_id'),
      auth_uri: configService.get('auth_uri'),
      token_uri: configService.get('token_uri'),
      auth_provider_x509_cert_url: configService.get('auth_provider_x509_cert_url'),
      client_x509_cert_url: configService.get('client_x509_cert_url'),
      universe_domain: configService.get('universe_domain'),
    } as admin.ServiceAccount;

    try {
      return admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        databaseURL: configService.get('DB_URLS').trim(),
      });
    } catch (error) {
      console.error('Firebase initialization error:', error);
      throw error;
    }
  },
};

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [firebaseProvider, FirebaseRepository],
  exports: [FirebaseRepository],
})
export class FirebaseModule {}