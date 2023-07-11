import {authHandler} from './handlers/auth';
import {myRecordsHandlers} from './handlers/myrecords';
import {columnHandler} from './handlers/column';

export const handlers = [
  ...authHandler,
  ...myRecordsHandlers,
  ...columnHandler,
];
