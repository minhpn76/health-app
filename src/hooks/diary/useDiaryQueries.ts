import {useInfiniteQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {MyDiaryPagedQuery} from 'src/@types/models/diary';
import {myRecordApiClient} from 'src/api/clients/myRecordApiClient';

export const useDiaryQuery = (query?: MyDiaryPagedQuery) => {
  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.MY_DIARY);

  return useInfiniteQuery(
    listWithFilters({
      ...query,
    }),
    ({pageParam = query?.pageNo}) =>
      myRecordApiClient.getMyDiary({pageNo: pageParam}),
    {
      getNextPageParam: lastPage => {
        return !lastPage.last ? lastPage.data : undefined;
      },
    }
  );
};
