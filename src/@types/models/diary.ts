import {BaseEntity} from './baseEntities';
import PagedQuery from './pagedQuery';

export interface MyDiaryPagedQuery extends PagedQuery {}

export interface MyDiaryEntity extends BaseEntity {
  title: string;
  description: string;
}
