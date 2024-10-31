import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';
import axios from 'axios'


@Injectable()
export class FirebaseRepository {
  private database: admin.database.Database;
  private baseDB_Url : string;
  constructor(@Inject('FIREBASE_APP') private app: admin.app.App) {
    this.database = app.database();
    this.baseDB_Url = this.database.app.options.databaseURL
  }

  async getListMusicChart(path: string): Promise<any> {
    try {
      const url = `${this.baseDB_Url}/${path}.json`;
      console.log('Request URL:', url);

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error reading data:', error);
      throw error;
    }
  }
}
