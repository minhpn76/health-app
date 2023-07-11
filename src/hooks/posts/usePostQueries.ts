import {useInfiniteQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {PostPagedQuery} from 'src/@types/models/posts';
import postsApiClient from 'src/api/clients/postsApiClient';

export const usePostsQuery = (query?: PostPagedQuery) => {
  const apiClient = postsApiClient();

  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.POSTS);

  return useInfiniteQuery(
    listWithFilters({
      ...query,
    }),
    ({pageParam = query?.pageNo}) => apiClient.get({pageNo: pageParam}),
    {
      getNextPageParam: lastPage => {
        console.log('lastPage', lastPage);

        return !lastPage.last ? lastPage.data : undefined;
      },
    }
  );
};
