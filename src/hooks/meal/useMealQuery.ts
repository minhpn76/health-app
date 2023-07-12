import {useInfiniteQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {MealHistoryPagedQuery} from 'src/@types/models/meal';
import {mealApiClient} from 'src/api/clients/mealApiClient';

export const useMealHistoryQuery = (query?: MealHistoryPagedQuery) => {
  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.MEAL_HISTORY);

  return useInfiniteQuery(
    listWithFilters({
      ...query,
    }),
    ({pageParam = query?.pageNo}) =>
      mealApiClient.getMealHistory({
        pageNo: pageParam,
        mealType: query?.mealType,
      }),
    {
      getNextPageParam: lastPage => {
        return !lastPage.last ? lastPage.data : undefined;
      },
    }
  );
};
