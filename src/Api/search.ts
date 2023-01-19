import { ConditionalSearchedData } from '@/types/search';

import api from './api';

export const getSearchByType = async <T>(
  type: string,
  query: string
): Promise<ConditionalSearchedData<T>> => {
  const { data } = await api.get<ConditionalSearchedData<T>>(`search/${type}/${query}`);

  return data;
};
