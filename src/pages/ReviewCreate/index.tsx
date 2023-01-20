import { useMemo } from 'react';
import { InformLogOutModal } from '@/components/Modal';
import ReviewCreateForm from '@/components/ReviewCreateForm';
import { getLocalStorage } from '@/utils/storage';
import { CATEGORY_ID_NAME } from '@/utils/constants';
import { CategoryType } from '@/types';

const ReviewCreate = () => {
  const categoryData: Readonly<CategoryType[]> = useMemo(() => {
    const category = getLocalStorage(CATEGORY_ID_NAME);
    if (!category) return [];
    else {
      return JSON.parse(category);
    }
  }, []);

  return (
    <div className="h-full pt-20">
      <ReviewCreateForm categoryData={categoryData} />
      <InformLogOutModal />
    </div>
  );
};

export default ReviewCreate;
