import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, interval } from 'rxjs';
import { selectRoomName, selectZoneId } from '../state/room/room.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  roomName$ = this.store.select(selectRoomName);
  zoneId$ = this.store.select(selectZoneId);

  public countdown;

  private subscription: Subscription;

  constructor(private readonly store: Store) {}

  private static addPaddingZero(value: number): string {
    return value > 9 ? value.toString() : '0' + value.toString();
  }

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
    const minutesLeft = Math.floor(difference / 60000 % 60);
    const secondsLeft = Math.floor(difference / 1000 % 60);
    this.countdown = HeaderComponent.addPaddingZero(minutesLeft) + ':' + HeaderComponent.addPaddingZero(secondsLeft);
  }
}
