import ReviewCreateForm from '@/components/ReviewCreateForm';
import { extractCategoryNameAndIdState } from '@/store/recoilCategoryState';
import { useRecoilValue } from 'recoil';

const ReviewCreate = () => {
  const categoryNameAndId = useRecoilValue(extractCategoryNameAndIdState);

  // 수화: 카테고리 이름, 아이디 전역 상태 관리 참조 방법
  console.log(categoryNameAndId);

  return (
    <div className="h-full pt-16">
      <ReviewCreateForm />
    </div>
  );
};

export default ReviewCreate;
