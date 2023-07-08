import {authHandler} from './handlers/auth';
import {myRecordsHandlers} from './handlers/myrecords';

export const handlers = [...authHandler, ...myRecordsHandlers];
