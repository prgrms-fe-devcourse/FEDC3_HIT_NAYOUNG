import { atom } from 'recoil';
import { CategoryType } from '@/types';

export const categoryState = atom<Readonly<CategoryType[]>>({
  key: 'categoryState',
  default: [],
});
