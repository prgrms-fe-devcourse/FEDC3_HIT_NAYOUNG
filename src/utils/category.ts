import { Category } from '@/types/category';
import { setLocalStorage, getLocalStorage } from '@/utils/storage';
import { CATEGORY_ID_NAME } from '@/utils/constants';

export const setCategoryNameAndIdStateToLocalStorage = (categoryState: Category[]) => {
  const categoryNameAndId = categoryState.map(({ name, _id }) => ({ id: _id, name }));

  if (getLocalStorage(CATEGORY_ID_NAME)) return;

  setLocalStorage(CATEGORY_ID_NAME, JSON.stringify(categoryNameAndId));
};
