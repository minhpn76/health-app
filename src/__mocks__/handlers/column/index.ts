import {rest} from 'msw';
import {API_PATH, LOCAL_STORAGE_KEY} from 'src/constants/common';
import {postData} from './data/postData';

export const columnHandler = [
  rest.get(`${API_PATH}/posts`, (req: any, res: any, ctx: any) => {
    let pageNumber = req.url.searchParams.get('pageNo');
    const pageSize = req.url.searchParams.get('pageSize') || 8;

    let data = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.KEY_POSTS) || '{}'
    );

    if (!pageNumber || isNaN(pageNumber) || pageNumber <= 0) pageNumber = 1;
    let filteredData = data;

    const totalRecords = filteredData.length;
    const totalPage =
      totalRecords === 0 ? 0 : Math.trunc((totalRecords - 1) / pageSize) + 1;
    filteredData = filteredData.slice(
      pageSize * (pageNumber - 1),
      pageSize * pageNumber
    );
    console.log('totalPage', totalPage, pageNumber);
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

if (!localStorage.getItem(LOCAL_STORAGE_KEY.KEY_POSTS)) {
  localStorage.setItem(LOCAL_STORAGE_KEY.KEY_POSTS, JSON.stringify(postData));
}
