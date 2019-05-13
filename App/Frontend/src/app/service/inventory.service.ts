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
    return this.http.get(`${this.uri}/readAllCountries`).pipe(map(res => res.json()));
  }

  addInventory(newInventory) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/createInventory`, newInventory, {headers: headers}).pipe(map(res => res.json()));
  }

  updateInventory(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.uri}/updateInventory/${data.idSearch}`, data.inventoryChange, {headers: headers}).pipe(map(res => res.json()));
  }

  deleteInventory(id){
    return this.http.delete(`${this.uri}/deleteInventory/${id}`)
  }
}
