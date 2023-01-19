import { CategoryType } from '@/types';
import { Category } from '@/types/category';
import { setLocalStorage, getLocalStorage } from '@/utils/storage';
import { CATEGORY_ID_NAME } from '@/utils/constants';
import { VALID_CATEGORY_NAME } from '@/utils/constants';

// categoryId를 받아서, 맞는 채널 이름 리턴
export const getCategoryNameToMatchingId = (categoryId: string): string => {
  const categoryInLocalStorage = getLocalStorage(CATEGORY_ID_NAME);
  if (!categoryInLocalStorage) {
    throw new Error('로컬스토리지에 카테고리 정보가 없음');
  } else {
    const category = JSON.parse(categoryInLocalStorage) as CategoryType[];
    const targetCategory = category
      .filter(({ id }) => id === categoryId)
      .pop() as CategoryType;

    return targetCategory.name;
  }
};

// 카테고리 상태값을 로컬스토리지에 저장
export const setCategoryNameAndIdStateToLocalStorage = (categoryState: Category[]) => {
  if (getLocalStorage(CATEGORY_ID_NAME)) return;

  const validCategory = extractValidCategory(categoryState);
  const categoryNameAndId = validCategory.map(({ name, _id }) => ({ id: _id, name }));

  setLocalStorage(CATEGORY_ID_NAME, JSON.stringify(categoryNameAndId));
};

// 유효한 카테고리인지 체크
export const extractValidCategory = (categories: Category[]) => {
  return categories.filter((category) => VALID_CATEGORY_NAME.includes(category.name));
};
