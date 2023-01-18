import { Category } from '@/types/category';
import { setLocalStorage, getLocalStorage } from '@/utils/storage';
import { CATEGORY_ID_NAME } from '@/utils/constants';
import { extractCategoryCondition } from '@/hooks/api/useFetchHIT';

export const setCategoryNameAndIdStateToLocalStorage = (categoryState: Category[]) => {
  if (getLocalStorage(CATEGORY_ID_NAME)) return;

  const validCategory = extractCategoryCondition(categoryState);
  const categoryNameAndId = validCategory.map(({ name, _id }) => ({ id: _id, name }));

  setLocalStorage(CATEGORY_ID_NAME, JSON.stringify(categoryNameAndId));
};
