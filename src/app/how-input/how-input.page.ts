/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Inputs } from '../models/inputs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-how-input',
  templateUrl: './how-input.page.html',
  styleUrls: ['./how-input.page.css'],
})
export class HowInputPage implements OnInit {
  public airquality: number;
  public temperature: number;
  public humidity: number;
  public airId: number;
  public tempId: number;
  public humiId: number;

  data: Inputs;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Inputs();
  }

  ngOnInit() {
  }

  setAirquality(id: number) {
    this.airquality = id;
  }

  setTemperature(id: number) {
    this.temperature = id;
  }

  setHumidity(id: number) {
    this.humidity = id;
  }

  setLevelAir(id: number) {
    this.airId = id;
  }

  setLevelTemp(id: number) {
    this.tempId = id;
  }

  setLevelHumi(id: number) {
    this.humiId = id;
  }

  submitForm() {
    this.router.navigate(['overview']);
    /* // The old API node server
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['overview']);
    },
      (error) => {
        this.router.navigate(['overview']);
      });*/
  }
  submitForm2() {
    this.router.navigate(['introduction']);
  }


}
