import { InformLogOutModal } from '@/components/Modal';
import ReviewCreateForm from '@/components/ReviewCreateForm';
import { categoryState } from '@/store/recoilCategoryState';
import { useRecoilValue } from 'recoil';

const ReviewCreate = () => {
  const categoryData = useRecoilValue(categoryState);

  return (
    <div className="h-full pt-16">
      <ReviewCreateForm categoryData={categoryData} />
      <InformLogOutModal />
    </div>
  );
};

export default ReviewCreate;
