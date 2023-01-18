import { atom, selector } from 'recoil';

import { Category } from '@/types/category';
import { CategoryType } from '@/types';

export const categoryState = atom<Readonly<Category[]> | null>({
  key: 'CATEGORY_STATE',
  default: null,
});

export const extractCategoryNameAndIdState = selector<CategoryType[]>({
  key: 'EXTRACT_CATEGORY',
  get: ({ get }) => {
    const result = get(categoryState);

    return result ? result.map(({ name, _id }) => ({ id: _id, name })) : [];
  },
});
