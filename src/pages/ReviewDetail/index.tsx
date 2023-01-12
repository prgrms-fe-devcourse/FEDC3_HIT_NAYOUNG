import api from '@/Api/api';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ReviewPoster 컴포넌트에서 ReviewDetail 라우터로 이동하면서 임시 비동기 코드가 작동하는지 확인하는 test 코드 (PR에 올라온 로직 merge 후 바로 삭제 예정)
const ReviewDetail = () => {
  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    const getReviewDetail = async () => {
      const response = await api.get(`/posts/${id}`);
      console.log(response);
    };

    getReviewDetail();
  }, []);

  return <div>ReviewDetail</div>;
};

export default ReviewDetail;
