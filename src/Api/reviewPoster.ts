import { ReviewPosterType } from '@/types';

import { CATEGORY_DEFAULT_NOTEBOOK_ID } from '@/utils/constants';

import api from './api';

export const getSpecifiedReviewPoster = async (): Promise<ReviewPosterType[]> => {
  const { data } = await api.get<ReviewPosterType[]>(
    `/posts/channel/${CATEGORY_DEFAULT_NOTEBOOK_ID}`
  );

  return data;
};

export const getAllReviewPoster = (channelId: string) =>
  api.get(`/posts/channel/${channelId}`);
