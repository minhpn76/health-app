import {QUERY_KEYS} from 'src/constants/queryKeys';

function useQueryKeys(topic: string) {
  const all = [topic];

  const list = [...all, QUERY_KEYS.LIST];

  const listWithFilters = (filters: unknown) => [...list, {filters}];

  return {
    all,
    list,
    listWithFilters,
  };
}

export default useQueryKeys;
