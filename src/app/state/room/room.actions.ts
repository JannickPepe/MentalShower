import { createAction, props } from '@ngrx/store';

export const setRoom = createAction('[Room] Set room', props<{ roomName?: string; zoneId?: number }>());
