import ReviewUpdateForm from '@/components/ReviewUpdateForm';
import { extractCategoryNameAndIdState } from '@/store/recoilCategoryState';
import { useRecoilValue } from 'recoil';

const ReviewUpdate = () => {
  const categoryData = useRecoilValue(extractCategoryNameAndIdState);

  return (
    <div className="h-full pt-16">
      <ReviewUpdateForm categoryData={categoryData} />
    </div>
  );
};

export default ReviewUpdate;
