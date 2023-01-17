import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Category } from '@/types/category';
import { ExtractedReviewPosterType } from '@/types/review';

import { categoryState } from '@/store/recoilCategoryState';

import { VALID_CATEGORY_NAME } from '@/utils/constants';

import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';

type HITAllDataType = {
  category: Category[];
  specifiedPoster: Omit<ExtractedReviewPosterType, '_id'>[];
};

function extractCategoryCondition(categories: Category[]) {
  return categories.filter((category) => VALID_CATEGORY_NAME.includes(category.name));
}

function extractReviewPosterCondition(reviews: ExtractedReviewPosterType[]) {
  const result = reviews.map(({ _id, title, image }) => ({
    id: _id as string,
    title,
    image,
  }));

  return result.slice(0, 2);
}

const useFetchHIT = () => {
  const [data, setData] = useState<HITAllDataType | null>(null);
  const [loading, setLoading] = useState(false);
  const setCategory = useSetRecoilState(categoryState);

  useEffect(() => {
    const run = async () => {
      try {
        const [categoryResponse, reviewPosterResponse] = (
          await Promise.all([
            getCategory<Category[]>(),
            getSpecifiedReviewPoster<ExtractedReviewPosterType[]>(),
          ])
        ).map(({ data }) => data);

        setData({
          category: extractCategoryCondition(categoryResponse as Category[]),
          specifiedPoster: extractReviewPosterCondition(
            reviewPosterResponse as ExtractedReviewPosterType[]
          ),
        });
        setCategory(categoryResponse as Category[]);
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
