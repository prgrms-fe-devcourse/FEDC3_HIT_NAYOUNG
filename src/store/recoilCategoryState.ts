import { atom, selector } from 'recoil';

import { Category } from '@/types/category';

export const categoryState = atom<Readonly<Category[]> | null>({
  key: 'CATEGORY_STATE',
  default: null,
});

export const extractCategoryNameAndIdState = selector({
  key: 'EXTRACT_CATEGORY',
  get: ({ get }) => get(categoryState)?.map(({ name, _id }) => ({ id: _id, name })),
});
