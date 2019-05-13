import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {City} from '../models/city';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CityService {
  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getCity() {
    return this.http.get(`${this.uri}/readAllCities`).pipe(map(res => res.json()));
  }

  addCity(newCity) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/createCity`, newCity, {headers: headers}).pipe(map(res => res.json()));
  }
}
