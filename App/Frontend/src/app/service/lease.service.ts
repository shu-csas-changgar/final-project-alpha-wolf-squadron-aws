import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Lease} from '../models/Lease';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LeaseService {

  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getLease() {
    return this.http.get(`${this.uri}/readAllCountries`).pipe(map(res => res.json()));
  }

  addLease(newLease) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/createLease`, newLease, {headers: headers}).pipe(map(res => res.json()));
  }

  updateLease(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.uri}/updateLease/${data.idSearch}`, data.leaseChange, {headers: headers}).pipe(map(res => res.json()));
  }

  deleteLease(id){
    return this.http.delete(`${this.uri}/deleteLease/${id}`)
  }
}
