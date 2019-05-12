import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Address} from '../models/address';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getEquipment() {
    return this.http.get(`${this.uri}/readAllEquipment`).pipe(map(res => res.json()));
  }
}