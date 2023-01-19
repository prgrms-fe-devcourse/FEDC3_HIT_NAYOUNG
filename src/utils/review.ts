import { ExtractedReviewPosterType } from '@/types/review';

export const extractRecommendReviewPoster = (reviews: ExtractedReviewPosterType[]) => {
  const result = reviews.map(({ _id, title, image }) => ({
    id: _id as string,
    title,
    image,
  }));

  return result.slice(0, 2);
};
