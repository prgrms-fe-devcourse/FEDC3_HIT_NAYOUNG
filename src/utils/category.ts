import { CategoryType } from '@/types';

// FIXME: utils > storage 받으면, 로컬스토리지 로직 대체하기
export const getCategoryNameToMatchingId = (categoryId: string): string => {
  const categoryInLocalStorage = localStorage.getItem('category-id-name');
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
