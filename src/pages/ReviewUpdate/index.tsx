import ReviewUpdateForm from '@/components/ReviewUpdateForm';
import { CategoryType } from '@/types';
import { CATEGORY_ID_NAME } from '@/utils/constants';
import { getLocalStorage } from '@/utils/storage';
import { useMemo } from 'react';

const ReviewUpdate = () => {
  const categoryData: Readonly<CategoryType[]> = useMemo(() => {
    const category = getLocalStorage(CATEGORY_ID_NAME);
    if (!category) return [];
    else {
      return JSON.parse(category);
    }
  }, []);

  return (
    <div className="h-full pt-16">
      <ReviewUpdateForm categoryData={categoryData} />
    </div>
  );
};

export default ReviewUpdate;
