import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  zone: number = 4;
  Temperature: number = 3;
  Humidity: number = 6;
  AirQuality: number = 2;

  constructor(public http: HttpClient) {
  }
  ngOnInit(){}

  sendPostRequest() {
    let YourHeaders = {'Content-Type':'application/json'};
    let zone = this.zone;
    let Temperature = this.Temperature;
    let Humidity = this.Humidity;
    let AirQuality = this.AirQuality;

    let postData = {
            zone,
            Temperature,
            Humidity,
            AirQuality
    }

    this.http.post("https://mentals-shower.herokuapp.com", postData, {headers: YourHeaders})
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }
}