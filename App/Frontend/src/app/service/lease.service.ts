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
    return this.http.get(`${this.uri}/readAllLeases`).pipe(map(res => res.json()));
  }
}
