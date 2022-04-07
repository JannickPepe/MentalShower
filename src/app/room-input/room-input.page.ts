import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-input',
  templateUrl: './room-input.page.html',
  styleUrls: ['./room-input.page.scss'],
})
export class RoomInputPage implements OnInit {
  public zoneno: string;
  public colorvar;

  constructor() {}

  ngOnInit() {}

  btnClicked(zone) {
    this.zoneno = zone;
  }
  test() {
    this.colorvar = document.getElementById('bgcolor').style.backgroundColor =
      '#99D2FC';
    this.colorvar = document.getElementById('bgcolor2').style.backgroundColor =
      'rgba(153, 210, 252, 0.6)';
  }
  test1() {
    this.colorvar = document.getElementById('bgcolor2').style.backgroundColor =
      '#99D2FC';
    this.colorvar = document.getElementById('bgcolor').style.backgroundColor =
      'rgba(153, 210, 252, 0.6)';
  }
}
