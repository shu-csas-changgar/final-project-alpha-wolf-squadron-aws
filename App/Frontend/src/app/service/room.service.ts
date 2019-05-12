import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Room} from '../models/Room';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getRoom() {
    return this.http.get(`${this.uri}/readAllRooms`).pipe(map(res => res.json()));
  }
}
