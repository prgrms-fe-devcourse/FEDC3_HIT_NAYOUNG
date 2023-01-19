import { atom } from 'recoil';
import { CategoryType } from '@/types';

export const categoryState = atom<Readonly<CategoryType[]>>({
  key: 'CATEGORY_STATE',
  default: [],
});
