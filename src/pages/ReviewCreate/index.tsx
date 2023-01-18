import { useRecoilValue } from 'recoil';

import { extractCategoryNameAndIdState } from '@/store/recoilCategoryState';

import { InformLogOutModal } from '@/components/Modal';
import ReviewCreateForm from '@/components/ReviewCreateForm';

const ReviewCreate = () => {
  const categoryData = useRecoilValue(extractCategoryNameAndIdState);

  return (
    <div className="h-full pt-16">
      <ReviewCreateForm categoryData={categoryData} />
      <InformLogOutModal />
    </div>
  );
};

export default ReviewCreate;
