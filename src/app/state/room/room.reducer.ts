import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { setRoom } from './room.actions';
import { RoomState } from '../../models/app-model';

export const initialState: RoomState = {
  room: null,
  zone: null,
};

export const selectRoomState = createFeatureSelector('room');

export const selectRoomName = createSelector(selectRoomState, (state: RoomState) => state.room);
export const selectZoneId = createSelector(selectRoomState, (state: RoomState) => state.zone);

export const roomReducer = createReducer(
  initialState,
  on(setRoom, (state, { roomName, zoneId }): RoomState => {
    return {
      room: roomName || state.room,
      zone: zoneId || state.zone,
    };
  })
);
