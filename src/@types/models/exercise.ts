import {BaseEntity} from './baseEntities';

export interface MyExerciseQuery {
  createdOn?: string;
}

export interface MyExerciseEntity extends BaseEntity {
  activity: string;
  energyConsumption: string;
  activityTime: string;
}
