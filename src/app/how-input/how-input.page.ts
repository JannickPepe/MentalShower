/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-input',
  templateUrl: './how-input.page.html',
  styleUrls: ['./how-input.page.css'],
})
export class HowInputPage implements OnInit {

  constructor() { }

  btnClicked() {
    console.log('button clicked');
    alert('You have now choosed level 1');
  }

  ngOnInit() {
  }

}
