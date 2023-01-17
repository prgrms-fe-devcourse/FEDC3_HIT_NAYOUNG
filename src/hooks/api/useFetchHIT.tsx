import { useEffect, useState } from 'react';

import { Category, CategoryName, ReviewPosterType } from '@/types';

import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';

type HITAllDataType = {
  category: Category[];
  specifiedPoster: Omit<ReviewPosterType, '_id'>[];
};

const VALID_CATEGORY_NAME = [
  '노트북',
  '모니터',
  '시계',
  '오디오',
  '키보드',
  '휴대폰',
] as CategoryName[];

const extractCategoryCondition = (
  categories: Category[],
  callback: (category: Category) => boolean
) => categories.filter(callback);

const extractReviewPosterCondition = (
  reviews: ReviewPosterType[],
  callback: (review: ReviewPosterType) => ReviewPosterType
) => reviews.map(callback).slice(0, 2);

const useFetchHIT = () => {
  const [data, setData] = useState<HITAllDataType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const [categoryResponse, reviewPosterResponse] = (
          await Promise.all([getCategory(), getSpecifiedReviewPoster()])
        ).map(({ data }) => data);

        // const selectedCategory = getAllHITData[1].map(({ name, _id }) => ({
        //   name,
        //   id: _id,
        // }));

        setData({
          category: extractCategoryCondition(categoryResponse, (category) =>
            VALID_CATEGORY_NAME.includes(category.name)
          ),
          specifiedPoster: extractReviewPosterCondition(
            reviewPosterResponse,
            ({ _id, title, image }) => ({
              id: _id as string,
              title,
              image,
            })
          ),
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
