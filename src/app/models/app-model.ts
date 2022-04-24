export type Condition = 'fresh' | 'stuffy' | 'cold' | 'warm' | 'dry' | 'damp';

export interface RoomState {
  room: null | string;
  zone: null | number;
}
