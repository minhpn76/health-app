import {useQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {myRecordApiClient} from 'src/api/clients/myRecordApiClient';
import {MyAnalysisQuery} from 'src/@types/models/myAnalysis';

export const useAnalysisQuery = (query?: MyAnalysisQuery) => {
  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.MY_ANALYSIS);

  return useQuery(
    listWithFilters({
      ...query,
    }),
    () => myRecordApiClient.getMyAnalysis(query)
  );
};
