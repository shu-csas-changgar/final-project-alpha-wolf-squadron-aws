import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {City} from '../models/city';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getEmployee() {
    return this.http.get(`${this.uri}/readAllEmployees`).pipe(map(res => res.json()));
  }
}
