import axios from 'axios';
import {API_PATH} from 'src/constants/common';
import {PaginableData} from 'src/@types/models/paginableData';
import {MyDiaryEntity, MyDiaryPagedQuery} from 'src/@types/models/diary';
import {MyExerciseQuery, MyExerciseEntity} from 'src/@types/models/exercise';
import {BodyRecordEntity, BodyRecordQuery} from 'src/@types/models/bodyRecord';

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

  export const getMyExercise = async (params?: MyExerciseQuery) => {
    const response = await axios.get<MyExerciseEntity[]>(
      `${API_PATH}/my-exercise`,
      {
        params,
      }
    );
    return response.data;
  };

  export const getBodyRecords = async (params?: BodyRecordQuery) => {
    const response = await axios.get<BodyRecordEntity[]>(
      `${API_PATH}/body-records`,
      {
        params,
      }
    );
    return response.data;
  };
}
