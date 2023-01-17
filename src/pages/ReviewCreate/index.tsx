import ReviewCreateForm from '@/components/ReviewCreateForm';
import { categoryState } from '@/store/recoilCategoryState';
import { useRecoilValue } from 'recoil';

const ReviewCreate = () => {
  const categoryInformation = useRecoilValue(categoryState);
  console.log(categoryInformation);

  return (
    <div className="h-full pt-16">
      <ReviewCreateForm />
    </div>
  );
};

export default ReviewCreate;
