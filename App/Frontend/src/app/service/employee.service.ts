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

  addEmployee(newEmployee) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/createEmployee`, newEmployee, {headers: headers}).pipe(map(res => res.json()));
  }

  updateEmployee(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.uri}/updateEmployee/${data.idSearch}`, data.employeeChange, {headers: headers}).pipe(map(res => res.json()));
  }

  deleteEmployee(id){
    return this.http.delete(`${this.uri}/deleteEmployee/${id}`)
  }
}
