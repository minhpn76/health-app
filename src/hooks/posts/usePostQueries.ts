import {useInfiniteQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {PostPagedQuery} from 'src/@types/models/posts';
import {postsApiClient} from 'src/api/clients/postsApiClient';

export const usePostsQuery = (query?: PostPagedQuery) => {
  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.POSTS);

  return useInfiniteQuery(
    listWithFilters({
      ...query,
    }),
    ({pageParam = query?.pageNo}) =>
      postsApiClient.get({pageNo: pageParam, postType: query?.postType}),
    {
      getNextPageParam: lastPage => {
        return !lastPage.last ? lastPage.data : undefined;
      },
    }
  );
};
