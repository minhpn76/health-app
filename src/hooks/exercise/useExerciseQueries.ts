import {useQuery} from '@tanstack/react-query';
import useQueryKeys from '../common/useQueryKeys';
import {QUERY_TOPICS} from 'src/constants/queryKeys';
import {myRecordApiClient} from 'src/api/clients/myRecordApiClient';
import {MyExerciseQuery} from 'src/@types/models/exercise';

export const useExerciseQuery = (query?: MyExerciseQuery) => {
  const {listWithFilters} = useQueryKeys(QUERY_TOPICS.MY_EXERCISE);

  return useQuery(
    listWithFilters({
      ...query,
    }),
    () => myRecordApiClient.getMyExercise(query)
  );
};
