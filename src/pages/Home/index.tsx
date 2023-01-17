import { useRecoilState, useSetRecoilState } from 'recoil';

import { informLoginModalState } from '@/store/store';
import { categoryState } from '@/store/recoilCategoryState';

import useFetchHIT from '@/hooks/api/useFetchHIT';

import { InformLoginModal } from '@/components/Modal';
import ReviewPoster from '@/components/Home/ReviewPoster';
import CategoryList from '@/components/Home/Category/CategoryList';

const Home = () => {
  const [open, setOpen] = useRecoilState(informLoginModalState);
  const setCategory = useSetRecoilState(categoryState);
  const { data, loading } = useFetchHIT();
  const titleClassName =
    'text-start sm:text-base md:text-lg lg:text-xl text-TEXT_BASE_BLACK font-semibold mb-2';

  if (data && !loading) {
    return (
      <>
        <h1
          className={`md:hidden absolute top-5 left-1/2 -translate-x-1/2 text-5xl text-BASE font-extrabold`}
        >
          HIT
        </h1>
        <section className="flex flex-col items-center md:items-start lg:items-start max-w-xl w-full mx-auto pt-24 lg:pt-10 md:pt-10">
          {/* 추천 게시글 area */}
          <div className="w-11/12 h-full">
            {/* 컴포넌트르 분리하기 */}
            <h2 className={titleClassName}>추천 리뷰 게시글</h2>

            <ReviewPoster
              id={data?.specifiedPoster[0].id}
              title={data?.specifiedPoster[0].title}
              image={data?.specifiedPoster[0].image}
            />
            <ReviewPoster
              id={data?.specifiedPoster[1].id}
              title={data?.specifiedPoster[1].title}
              image={data?.specifiedPoster[1].image}
            />
            {/* 카테고리 목록 area */}
            <h2 className={titleClassName}>카테고리</h2>
            <CategoryList category={data?.category} />
          </div>
        </section>
        <InformLoginModal />
      </>
    );
  } else {
    return <div>...Loading</div>;
  }
};

export default Home;
