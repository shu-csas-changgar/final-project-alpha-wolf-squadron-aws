import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Office} from '../models/office';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getOffice() {
    return this.http.get(`${this.uri}/readAllCountries`).pipe(map(res => res.json()));
  }

  addOffice(newOffice) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/createOffice`, newOffice, {headers: headers}).pipe(map(res => res.json()));
  }

  updateOffice(theOffice) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.uri}/updateOffice/${theOffice.office_id}`, theOffice, {headers: headers}).pipe(map(res => res.json()));
  }

  deleteOffice(id){
    return this.http.delete(`${this.uri}/deleteOffice/${id}`)
  }
}
