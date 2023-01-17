import { atom } from 'recoil';
import { CategoryName } from '@/types';

type CategoryType = {
  name: CategoryName;
  id: string;
};

export const categoryState = atom<Readonly<CategoryType[]> | null>({
  key: 'categoryState',
  default: null,
});
