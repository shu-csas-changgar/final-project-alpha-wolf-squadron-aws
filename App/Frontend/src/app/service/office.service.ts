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
    return this.http.get(`${this.uri}/readAllOffices`).pipe(map(res => res.json()));
  }
}
