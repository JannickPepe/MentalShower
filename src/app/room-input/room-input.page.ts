import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setRoom } from '../state/room/room.actions';

@Component({
  selector: 'app-room-input',
  templateUrl: './room-input.page.html',
  styleUrls: ['./room-input.page.scss'],
})
export class RoomInputPage implements OnInit {
  public zoneno: number;
  public colorvar;

  constructor(private readonly store: Store, private readonly router: Router) {}

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

  acceptClick() {
    this.store.dispatch(setRoom({ roomName: 'D3.05', zoneId: this.zoneno }));
    this.router.navigate(['how-input']);
  }
}
