import { createAction, props } from '@ngrx/store';

export const setLevel = createAction('[Level] Set Level', props<{ airquality?: string; levelId?: number }>());
