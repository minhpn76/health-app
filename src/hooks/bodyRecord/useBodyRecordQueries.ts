import {useQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {myRecordApiClient} from 'src/api/clients/myRecordApiClient';
import {BodyRecordQuery} from 'src/@types/models/bodyRecord';

export const useBodyRecordQuery = (query?: BodyRecordQuery) => {
  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.BODY_RECORD);

  return useQuery(
    listWithFilters({
      ...query,
    }),
    () => myRecordApiClient.getBodyRecords(query)
  );
};
