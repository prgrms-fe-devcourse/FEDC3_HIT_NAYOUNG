import { CategoryType } from '@/types';
import { atom } from 'recoil';

export const categoryState = atom<Readonly<CategoryType[]>>({
  key: 'categoryState',
  default: [],
});
