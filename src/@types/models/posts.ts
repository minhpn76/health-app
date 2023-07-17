import {BaseEntity} from './baseEntities';
import PagedQuery from './pagedQuery';

export enum PostType {
  COLUMN = 'column',
  DIET = 'diet',
  BEAUTY = 'beauty',
  HEALTH = 'health',
}
export interface PostPagedQuery extends PagedQuery {
  postType?: PostType;
}

export interface PostEntity extends BaseEntity {
  title: string;
  image: string;
  tags?: Array<string>;
}
