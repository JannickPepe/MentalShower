export type Condition = 'fresh' | 'stuffy' | 'cold' | 'warm' | 'dry' | 'damp';

export interface RoomState {
  room: null | string;
  zone: null | number;
}

export interface OverviewItem {
  name: string;
  color: string;
  icon: string;
  value: number;
  unit: string;
}

export interface QuestionItem {
  name: string;
  title: string;
  question: string;
  color: string;
  iconLeft: string;
  iconRight: string;
}
