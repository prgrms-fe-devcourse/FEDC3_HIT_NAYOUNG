import { atom } from 'recoil';
import { CategoryName } from '@/types';

export type CategoryType = {
  name: CategoryName;
  id: string;
};

export const categoryState = atom<Readonly<CategoryType[]>>({
  key: 'categoryState',
  default: [],
});
