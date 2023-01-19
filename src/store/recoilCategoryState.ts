import { atom } from 'recoil';
import { Category } from '@/types/category';

export const categoryState = atom<Readonly<Category[]>>({
  key: 'CATEGORY_STATE',
  default: [],
});
