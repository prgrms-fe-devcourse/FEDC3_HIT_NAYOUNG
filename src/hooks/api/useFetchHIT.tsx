import { useEffect, useState } from 'react';

import { Category, CategoryName, ReviewPosterType } from '@/types';

import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';

type HITAllDataType = {
  category: Category[];
  specifiedPoster: Omit<ReviewPosterType, '_id'>[];
};

const validCategoryName: CategoryName[] = [
  '노트북',
  '모니터',
  '시계',
  '오디오',
  '키보드',
  '휴대폰',
];

const useFetchHIT = () => {
  const [data, setData] = useState<HITAllDataType | null>(null);
  const [loading, setLoading] = useState(false);

  const extractCategoryCondition = (categories: Category[]) => {
    return categories.filter((category) => validCategoryName.includes(category.name));
  };

  const extractReviewPosterCondition = (data: ReviewPosterType[]) => {
    const divideBanana = data.map(({ _id, title, image }: ReviewPosterType) => ({
      id: _id as string,
      title,
      image,
    }));

    return divideBanana.slice(0, 2);
  };

  useEffect(() => {
    const run = async () => {
      try {
        const getAllHITData = (
          await Promise.all([getCategory(), getSpecifiedReviewPoster()])
        ).map(({ data }) => data);

        // const selectedCategory = validCategory.map(({ name, _id }) => ({
        //   name,
        //   id: _id,
        // }));

        setData({
          category: extractCategoryCondition(getAllHITData[0]),
          specifiedPoster: extractReviewPosterCondition(getAllHITData[1]),
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
