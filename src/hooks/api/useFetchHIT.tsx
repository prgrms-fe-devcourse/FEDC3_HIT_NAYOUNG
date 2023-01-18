import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Category } from '@/types/category';
import { ExtractedReviewPosterType } from '@/types/review';

import { categoryState } from '@/store/recoilCategoryState';

import { VALID_CATEGORY_NAME } from '@/utils/constants';

import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';
import { setCategoryNameAndIdStateToLocalStorage } from '@/utils/category';

type HITAllDataType = {
  category: Category[];
  specifiedPoster: Omit<ExtractedReviewPosterType, '_id'>[];
};

// 공통화 어떻게 하면 좋을까요? -> utils로 빼는 게 나을 거 같은데
export function extractCategoryCondition(categories: Category[]) {
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
        const [categoryResponse, reviewPosterResponse] = await Promise.all([
          getCategory(),
          getSpecifiedReviewPoster(),
        ]);

        setData({
          category: extractCategoryCondition(categoryResponse),
          specifiedPoster: extractReviewPosterCondition(reviewPosterResponse),
        });
        setCategory(categoryResponse as Category[]);
        setCategoryNameAndIdStateToLocalStorage(categoryResponse as Category[]);
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
