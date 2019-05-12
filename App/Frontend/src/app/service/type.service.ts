import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Type} from '../models/Type';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getType() {
    return this.http.get(`${this.uri}/readAllTypes`).pipe(map(res => res.json()));
  }
}