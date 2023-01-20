import { ReviewPosterType } from '@/types';

export const extractRecommendReviewPoster = (reviews: ReviewPosterType[]) => {
  const result = reviews.map(({ _id, title, image, author }) => ({
    id: _id as string,
    title,
    image,
    author,
  }));

  return result.slice(0, 2);
};
