import axios from 'axios';
import {PaginableData} from 'src/@types/models/paginableData';
import {MealHistoryEntity, MealHistoryPagedQuery} from 'src/@types/models/meal';
import {API_PATH} from 'src/constants/common';

export namespace mealApiClient {
  export const getMealHistory = async (params?: MealHistoryPagedQuery) => {
    const response = await axios.get<PaginableData<MealHistoryEntity>>(
      `${API_PATH}/meal-history`,
      {
        params,
      }
    );
    return response.data;
  };
}
