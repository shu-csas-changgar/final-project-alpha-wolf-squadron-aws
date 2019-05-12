import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {  }

  getView() {
    return this.http.get(`${this.uri}/view`);
  }
  
}

