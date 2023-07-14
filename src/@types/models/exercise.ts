import {BaseEntity} from './baseEntities';
import PagedQuery from './pagedQuery';

export interface MyExercisePagedQuery extends PagedQuery {
  createdOn?: string;
}

export interface MyExerciseEntity extends BaseEntity {
  activity: string;
  energyConsumption: string;
  activityTime: string;
}
