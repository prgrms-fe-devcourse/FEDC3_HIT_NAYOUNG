import { useSetRecoilState } from 'recoil';
import { InformLoginModal, InformLogOutModal } from '@/components/Modal';
import { useEffect, useState } from 'react';
import { categoryState } from '@/store/recoilCategoryState';
import { Category, CategoryName, ReviewPosterType } from '@/types';
import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';
import ReviewPoster from '@/components/Home/ReviewPoster';
import CategoryList from '@/components/Home/Category/CategoryList';

type DataType = {
  category: Category[];
  specifiedPoster: {
    id: string;
    title: string;
    image: string;
  }[];
};

const validCategoryName: CategoryName[] = [
  '노트북',
  '모니터',
  '시계',
  '오디오',
  '키보드',
  '휴대폰',
];

const Home = () => {
  const setCategory = useSetRecoilState(categoryState);
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const titleClassName =
    'text-start sm:text-base md:text-lg lg:text-xl text-TEXT_BASE_BLACK font-semibold mb-2';

  useEffect(() => {
    const run = async () => {
      try {
        const getAllMainData = (
          await Promise.all([getCategory(), getSpecifiedReviewPoster()])
        ).map(({ data }) => data);
        const categoryResponse: Category[] = getAllMainData[0];
        const specifiedReviewPosterResponse: {
          id: string;
          title: string;
          image: string;
        }[] = getAllMainData[1].map(
          ({ _id, title, image }: Omit<ReviewPosterType, 'id'>) => ({
            id: _id,
            title,
            image,
          })
        );
        const validCategory = categoryResponse.filter((category) =>
          validCategoryName.includes(category.name)
        );
        const validSpecifiedReviewPosterResponse = specifiedReviewPosterResponse.slice(
          0,
          2
        );
        const selectedCategory = validCategory.map(({ name, _id }) => ({
          name,
          id: _id,
        }));

        setData({
          category: validCategory,
          specifiedPoster: validSpecifiedReviewPosterResponse,
        });
        setCategory(selectedCategory);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

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
        <InformLogOutModal />
      </>
    );
  } else {
    return <div>...Loading</div>;
  }
};

export default Home;
