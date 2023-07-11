import {BaseEntity} from './baseEntities';
import PagedQuery from './pagedQuery';

export interface PostPagedQuery extends PagedQuery {}

export interface PostEntity extends BaseEntity {
  title: string;
  image: string;
  tags?: Array<string>;
}
