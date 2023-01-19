import { Category } from '@/types/category';
import { setLocalStorage, getLocalStorage } from '@/utils/storage';
import { CATEGORY_ID_NAME } from '@/utils/constants';
import { VALID_CATEGORY_NAME } from '@/utils/constants';

export const setCategoryNameAndIdStateToLocalStorage = (categoryState: Category[]) => {
  if (getLocalStorage(CATEGORY_ID_NAME)) return;

  const validCategory = extractValidCategory(categoryState);
  const categoryNameAndId = validCategory.map(({ name, _id }) => ({ id: _id, name }));

  setLocalStorage(CATEGORY_ID_NAME, JSON.stringify(categoryNameAndId));
};

export const extractValidCategory = (categories: Category[]) => {
  return categories.filter((category) => VALID_CATEGORY_NAME.includes(category.name));
};
