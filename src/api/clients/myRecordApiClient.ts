import axios from 'axios';
import {PaginableData} from 'src/@types/models/paginableData';
import {MyDiaryEntity, MyDiaryPagedQuery} from 'src/@types/models/diary';
import {API_PATH} from 'src/constants/common';

export namespace myRecordApiClient {
  export const getMyDiary = async (params?: MyDiaryPagedQuery) => {
    const response = await axios.get<PaginableData<MyDiaryEntity>>(
      `${API_PATH}/my-diary`,
      {
        params,
      }
    );
    return response.data;
  };
}
