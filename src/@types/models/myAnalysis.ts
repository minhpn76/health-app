import {BaseEntity} from './baseEntities';

export interface MyAnalysisQuery {
  createdOn?: string;
}

export interface MyAnalysisEntity extends BaseEntity {
  value: number;
}
