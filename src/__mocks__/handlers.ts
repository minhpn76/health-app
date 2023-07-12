import {authHandler} from './handlers/auth';
import {myRecordsHandlers} from './handlers/myrecords';
import {columnHandlers} from './handlers/column';
import {mealHandlers} from './handlers/meal';

export const handlers = [
  ...authHandler,
  ...myRecordsHandlers,
  ...columnHandlers,
  ...mealHandlers,
];
