import {BaseEntity} from './baseEntities';
import PagedQuery from './pagedQuery';

export enum MealType {
  MORNING = 'Morning',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  SNACK = 'Snack',
}

export interface MealHistoryPagedQuery extends PagedQuery {
  mealType?: MealType;
}

export interface MealHistoryEntity extends BaseEntity {
  type: MealType;
  image: string;
  datedOn?: Date;
}
