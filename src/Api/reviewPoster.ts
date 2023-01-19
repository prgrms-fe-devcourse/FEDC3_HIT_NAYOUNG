import { ReviewPosterType } from '@/types';

import api from './api';

const SPECIFIED_CATEGORY_ID = '63bd141d93836272216d324a';

export const getSpecifiedReviewPoster = async (): Promise<ReviewPosterType[]> => {
  const { data } = await api.get<ReviewPosterType[]>(
    `/posts/channel/${SPECIFIED_CATEGORY_ID}`
  );

  return data;
};

export const getAllReviewPoster = (channelId: string) =>
  api.get(`/posts/channel/${channelId}`);
