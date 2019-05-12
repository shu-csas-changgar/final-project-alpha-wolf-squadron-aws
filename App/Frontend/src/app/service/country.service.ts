import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Country} from '../models/country';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getCountry() {
    return this.http.get(`${this.uri}/readAllCountries`).pipe(map(res => res.json()));
  }
}
