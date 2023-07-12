import {rest} from 'msw';
import {orderBy} from 'lodash';
import {API_PATH, LOCAL_STORAGE_KEY} from 'src/constants/common';
import {mealHistory} from './data/mealData';

export const mealHandlers = [
  rest.get(`${API_PATH}/meal-history`, (req: any, res: any, ctx: any) => {
    let pageNumber = req.url.searchParams.get('pageNo');
    const pageSize = req.url.searchParams.get('pageSize') || 8;
    const mealType = req.url.searchParams.get('mealType');

    let data = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.KEY_MEAL_HISTORY) || '{}'
    );

    if (!pageNumber || isNaN(pageNumber) || pageNumber <= 0) pageNumber = 1;
    let filteredData = data;
    filteredData = orderBy(filteredData, 'datedOn', 'desc');
    if (mealType) {
      filteredData = filteredData.filter((i: any) => i.type === mealType);
    }

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
    return res(ctx.status(200), ctx.json(resp), ctx.delay(300));
  }),
];

if (!localStorage.getItem(LOCAL_STORAGE_KEY.KEY_MEAL_HISTORY)) {
  localStorage.setItem(
    LOCAL_STORAGE_KEY.KEY_MEAL_HISTORY,
    JSON.stringify(mealHistory)
  );
}
