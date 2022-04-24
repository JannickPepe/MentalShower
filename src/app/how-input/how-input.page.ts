/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-how-input',
  templateUrl: './how-input.page.html',
  styleUrls: ['./how-input.page.css'],
})
export class HowInputPage implements OnInit {
  constructor(private adminservice: AdminService) {}

  btnClickedAQ(num) {
    this.adminservice.saveAirQualityToStorage(num);
    // console.log('button clicked');
    // alert('You have now choosed level 1');
  }

  btnClickedTemp(num) {
    this.adminservice.saveTemperatureToStorage(num);

    // console.log('button clicked');
    // alert('You have now choosed level 1');
  }

  btnClickedHumid(num) {
    this.adminservice.saveHumidityToStorage(num);

    // console.log('button clicked');
    // alert('You have now choosed level 1');
  }

  postData() {
    this.adminservice.postInput();
  }

  ngOnInit() {}
}
