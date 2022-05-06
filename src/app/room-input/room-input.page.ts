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
  public gender: string;
  public roomName: string;
  public zoneId: number;

  constructor(private readonly store: Store, private readonly router: Router) {}

  ngOnInit() {}

  setGender(gender: string) {
    this.gender = gender;
  }

  setRoom(name: string) {
    this.roomName = name;
  }

  setZone(id: number) {
    this.zoneId = id;
  }

  async acceptClick() {
    this.store.dispatch(setRoom({ roomName: this.roomName, zoneId: this.zoneId }));
    await this.router.navigate(['how-input']);
  }
}
