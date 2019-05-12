import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import {Inventory} from '../models/Inventory';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getInventory() {
    return this.http.get(`${this.uri}/readAllInventory`).pipe(map(res => res.json()));
  }
}
