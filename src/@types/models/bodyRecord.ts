import {BaseEntity} from './baseEntities';

export enum PeriodType {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export interface BodyRecordQuery {
  periodType: PeriodType;
}

export interface BodyRecordEntity extends BaseEntity {
  name: string;
  uv: string;
  pv: string;
}
