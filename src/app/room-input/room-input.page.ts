import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-room-input',
  templateUrl: './room-input.page.html',
  styleUrls: ['./room-input.page.scss'],
})
export class RoomInputPage implements OnInit {
  public zoneno: string;
  public gender: string;

  public colorvar;

  constructor(private adminservice: AdminService) {}

  ngOnInit() {}

  btnClicked(zone) {
    this.zoneno = zone;
    this.adminservice.saveZoneToStorage(parseInt(this.zoneno, 10));
  }
  test(gen) {
    this.colorvar = document.getElementById('bgcolor').style.backgroundColor =
      '#99D2FC';
    this.colorvar = document.getElementById('bgcolor2').style.backgroundColor =
      'rgba(153, 210, 252, 0.6)';
    this.gender = gen;
    this.adminservice.saveGenderToStorage(this.gender);

    // this.adminservice.inputClimate.gender = this.gender;
  }
  test1(gen) {
    this.colorvar = document.getElementById('bgcolor2').style.backgroundColor =
      '#99D2FC';
    this.colorvar = document.getElementById('bgcolor').style.backgroundColor =
      'rgba(153, 210, 252, 0.6)';
    this.gender = gen;
    this.adminservice.saveGenderToStorage(this.gender);

    // this.adminservice.inputClimate.gender = this.gender;
  }
}
