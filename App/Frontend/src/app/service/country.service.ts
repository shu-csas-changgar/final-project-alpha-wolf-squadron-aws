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

  addCountry(newCountry) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/createCountry`, newCountry, {headers: headers}).pipe(map(res => res.json()));
  }

  updateCountry(theCountry) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.uri}/updateCountry` + theCountry.country_id, theCountry, {headers: headers}).pipe(map(res => res.json()));
  }

  deleteCountry(id){
    return this.http.delete(`${this.uri}/deleteCountry/${id}`)
  }
}
