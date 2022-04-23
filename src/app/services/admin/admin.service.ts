import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputClimate } from '../../models/inputClimate.model';

const baseUrl = 'http://localhost:8080/api/inputClimateNumber';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<InputClimate[]> {
    return this.http.get<InputClimate[]>(baseUrl);
  }

  get(id: any): Observable<InputClimate> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<InputClimate[]> {
  //   return this.http.get<InputClimate[]>(`${baseUrl}?title=${title}`);
  // }
}
