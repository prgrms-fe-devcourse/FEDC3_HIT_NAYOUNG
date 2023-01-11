import ReviewPoster from '@/components/ReviewPoster';
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import api from '@/Api/api';

// 디자인 테스트를 위한 임시 layout
// 메인 레이아웃 완성시 제거할 layout
// ReviewPoster 컴포넌트 test를 위한 임시 비동기 코드 (PR에 올라온 로직 merge 후 바로 삭제 예정)
const TemplateLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 5rem 2rem;
  height: 100vh;
`;

type TempDataType = {
  id: string;
  title: string;
  image: string;
} | null;

const Home = () => {
  const [specifiedPoster, setSpecifiedPoster] = useState<TempDataType>(null);

  useEffect(() => {
    const getSpecifiedPoster = async () => {
      try {
        const response = await api.get(
          '/posts/channel/63bd045193836272216d31bc?offset=&limit'
        );
        const recentUpdatePoster = response.data[0];

        setSpecifiedPoster({
          id: recentUpdatePoster._id,
          title: recentUpdatePoster.title,
          image: recentUpdatePoster.image,
        });
      } catch (e) {
        console.log(e);
      }
    };

    getSpecifiedPoster();
  }, []);

  if (specifiedPoster) {
    return (
      <TemplateLayout>
        <h1>Home</h1>
        <ReviewPoster
          id={specifiedPoster.id}
          title={specifiedPoster.title}
          image={specifiedPoster.image}
        />
      </TemplateLayout>
    );
  }

  return <div>Error</div>;
};

export default Home;
