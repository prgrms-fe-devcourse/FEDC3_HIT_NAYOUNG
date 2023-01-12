import { useRecoilState } from 'recoil';
import { InformLoginModal } from '@/components/Modal';
import { informLoginModalState } from '@/store/store';
import ReviewPoster from '@/components/Home/ReviewPoster';
import CategoryList from '@/components/Home/Category/CategoryList';

// UI test를 위한 더미 데이터
const DUMMY_DATA = {
  title: '맥북 강',
  image:
    'https://res.cloudinary.com/learnprogrammers/image/upload/v1673336085/post/6d8e6f95-d28a-4a47-bfe3-833bebd3ec98.jpg',
  _id: '63bd151693836272216d3256',
};

const Home = () => {
  const [open, setOpen] = useRecoilState(informLoginModalState);
  const titleClassName =
    'text-start sm:text-base md:text-lg lg:text-xl text-TEXT_BASE_BLACK font-semibold mb-2';

  return (
    <>
      {/* 모바일 뷰에서만 보이는 임시 Logo 컴포넌트 레이아웃  */}
      <h1
        className={`md:hidden absolute top-5 left-1/2 -translate-x-1/2 text-5xl text-BASE font-extrabold`}
      >
        HIT
      </h1>
      <section className="flex flex-col items-center md:items-start lg:items-start max-w-xl w-full mx-auto pt-24 lg:pt-10 md:pt-10">
        {/* 추천 게시글 area */}
        <div className="w-11/12 h-full">
          <h2 className={titleClassName}>추천 리뷰 게시글</h2>

          <ReviewPoster
            id={DUMMY_DATA._id}
            title={DUMMY_DATA.title}
            image={DUMMY_DATA.image}
          />
          <ReviewPoster
            id={DUMMY_DATA._id}
            title={DUMMY_DATA.title}
            image={DUMMY_DATA.image}
          />
          {/* 카테고리 목록 area */}
          <h2 className={titleClassName}>카테고리</h2>
          <CategoryList />
        </div>
      </section>
      <InformLoginModal />
    </>
  );
};

export default Home;
