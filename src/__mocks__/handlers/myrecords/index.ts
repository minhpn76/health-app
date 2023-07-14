import {rest} from 'msw';
import {orderBy} from 'lodash';
import {isEqual} from 'date-fns';
import {API_PATH, LOCAL_STORAGE_KEY, TIME_DELAY} from 'src/constants/common';
import {myDiaryData} from './data/myDiaryData';
import {myExerciseData} from './data/myExerciseData';

export const myRecordsHandlers = [
  rest.get(`${API_PATH}/my-diary`, (req: any, res: any, ctx: any) => {
    let pageNumber = req.url.searchParams.get('pageNo');
    const pageSize = req.url.searchParams.get('pageSize') || 8;

    let data = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.KEY_MY_DIARY) || '{}'
    );

    if (!pageNumber || isNaN(pageNumber) || pageNumber <= 0) pageNumber = 1;
    let filteredData = data;
    filteredData = orderBy(filteredData, 'datedOn', 'desc');

    const totalRecords = filteredData.length;
    const totalPage =
      totalRecords === 0 ? 0 : Math.trunc((totalRecords - 1) / pageSize) + 1;
    filteredData = filteredData.slice(
      pageSize * (pageNumber - 1),
      pageSize * pageNumber
    );
    let resp = {
      data: filteredData,
      first: !pageNumber || pageNumber === 1,
      last: Number(pageNumber) === Number(totalPage),
      pageSize,
      totalPage,
      totalRecords,
    };
    return res(ctx.status(200), ctx.json(resp), ctx.delay(TIME_DELAY));
  }),

  rest.get(`${API_PATH}/my-exercise`, (req: any, res: any, ctx: any) => {
    const createdOn = req.url.searchParams.get('createdOn');

    let data = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.KEY_MY_EXERCISE) || '{}'
    );

    let filteredData = data;
    if (createdOn) {
      filteredData = filteredData.filter((i: any) =>
        isEqual(new Date(createdOn), new Date(i.createdOn))
      );
    }

    return res(ctx.status(200), ctx.json(filteredData), ctx.delay(TIME_DELAY));
  }),
];

if (!localStorage.getItem(LOCAL_STORAGE_KEY.KEY_MY_DIARY)) {
  localStorage.setItem(
    LOCAL_STORAGE_KEY.KEY_MY_DIARY,
    JSON.stringify(myDiaryData)
  );
}

if (!localStorage.getItem(LOCAL_STORAGE_KEY.KEY_MY_EXERCISE)) {
  localStorage.setItem(
    LOCAL_STORAGE_KEY.KEY_MY_EXERCISE,
    JSON.stringify(myExerciseData)
  );
}
