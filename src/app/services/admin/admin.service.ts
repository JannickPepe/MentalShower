import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputClimate } from '../../models/inputClimate.model';
import { Storage } from '@ionic/storage';

const baseUrl = 'http://localhost:8080/api/inputClimateNumber';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public inputClimate: InputClimate = {};
  private storages: Storage | null = null;

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storages = storage;
  }

  saveZoneToStorage(zone) {
    this.storages.set('zone', zone);
  }

  saveGenderToStorage(gender) {
    this.storages.set('gender', gender);
  }

  saveAirQualityToStorage(aq) {
    this.storages.set('airQuality', aq);
  }

  saveTemperatureToStorage(temp) {
    this.storages.set('temperature', temp);
  }

  saveHumidityToStorage(humidity) {
    this.storages.set('humidity', humidity);
  }

  async postInput() {
    this.inputClimate.zoneNo = await this.storages.get('zone');
    this.inputClimate.gender = await this.storages.get('gender');
    this.inputClimate.airQuality = await this.storages.get('airQuality');
    this.inputClimate.temperature = await this.storages.get('temperature');
    this.inputClimate.humidity = await this.storages.get('humidity');

    console.log(this.inputClimate);

    this.create(this.inputClimate).subscribe(
      (data) => {
        // this.inputClimateNumbers = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.storages.clear();
  }

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
