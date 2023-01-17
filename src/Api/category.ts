import { Category } from '@/types';

import api from './api';

export const getCategory = async (): Promise<Category[]> => {
  const { data } = await api.get<Category[]>('/channels');

  return data;
};
