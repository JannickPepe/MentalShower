import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, interval } from 'rxjs';
import { selectRoomName, selectZoneId } from './state/room/room.reducer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  roomName$ = this.store.select(selectRoomName);
  zoneId$ = this.store.select(selectZoneId);

  public minutesLeft;
  public secondsLeft;

  private subscription: Subscription;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => this.timeUntilNextHour());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private timeUntilNextHour() {
    const date = new Date();
    const nextHour = new Date();
    nextHour.setHours(date.getHours() + 1, 0, 0, 0);
    const difference = nextHour.getTime() - date.getTime();
    this.minutesLeft = Math.floor(difference / 60000 % 60);
    this.secondsLeft = Math.floor(difference / 1000 % 60);
  }
}
