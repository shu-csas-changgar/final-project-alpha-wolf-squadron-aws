import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Vendor} from '../models/Vendor';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getVendor() {
    return this.http.get(`${this.uri}/readAllVendors`).pipe(map(res => res.json()));
  }
}