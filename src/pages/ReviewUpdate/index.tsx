import ReviewUpdateForm from '@/components/ReviewUpdateForm';
import { categoryState } from '@/store/recoilCategoryState';
import { useRecoilValue } from 'recoil';

const ReviewUpdate = () => {
  const categoryData = useRecoilValue(categoryState);

  return (
    <div className="h-full pt-16">
      <ReviewUpdateForm categoryData={categoryData} />
    </div>
  );
};

export default ReviewUpdate;
