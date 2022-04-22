/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-input',
  templateUrl: './how-input.page.html',
  styleUrls: ['./how-input.page.css'],
})
export class HowInputPage implements OnInit {
  public levelbar: string;
  public levelbar2: string;
  public levelbar3: string;
  public colorvar;

  constructor() { }

  ngOnInit() {
  }


  btnClicked(bar) {
    this.levelbar = bar;
  }
  btnClicked2(bar) {
    this.levelbar2 = bar;
  }
  btnClicked3(bar) {
    this.levelbar3 = bar;
  }


}
