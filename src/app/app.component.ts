import { Component } from '@angular/core';
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

  constructor(private readonly store: Store) {}
}
