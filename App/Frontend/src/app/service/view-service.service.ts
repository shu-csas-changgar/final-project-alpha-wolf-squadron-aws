import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {View} from '../models/view';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  uri = 'http://localhost:3000/api';

  constructor(private http: Http) {  }

  getView() {
    return this.http.get(`${this.uri}/view`).pipe(map(res => res.json()));
  }
  
}

