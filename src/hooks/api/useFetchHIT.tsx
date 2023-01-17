import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';
import { DataType } from '@/pages/Home';
import { Category, CategoryName, ReviewPosterType } from '@/types';
import { useEffect, useState } from 'react';

const validCategoryName: CategoryName[] = [
  '노트북',
  '모니터',
  '시계',
  '오디오',
  '키보드',
  '휴대폰',
];

const useFetchHIT = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const getAllHITData = (
          await Promise.all([getCategory(), getSpecifiedReviewPoster()])
        ).map(({ data }) => data);

        const categoryResponse: Category[] = getAllHITData[0];
        const validCategory = categoryResponse.filter((category) =>
          validCategoryName.includes(category.name)
        );

        const specifiedReviewPosterResponse: {
          id: string;
          title: string;
          image: string;
        }[] = getAllHITData[1].map(
          ({ _id, title, image }: Omit<ReviewPosterType, 'id'>) => ({
            id: _id,
            title,
            image,
          })
        );
        const validSpecifiedReviewPosterResponse = specifiedReviewPosterResponse.slice(
          0,
          2
        );
        // const selectedCategory = validCategory.map(({ name, _id }) => ({
        //   name,
        //   id: _id,
        // }));

        setData({
          category: validCategory,
          specifiedPoster: validSpecifiedReviewPosterResponse,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return { data, loading };
};

export default useFetchHIT;
