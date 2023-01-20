import { ReviewPosterType } from '@/types';

import { CATEGORY_DEFAULT_NOTEBOOK_ID } from '@/utils/constants';

import api from './api';

export const getSpecifiedReviewPoster = async () => {
  const { data } = await api.get<ReviewPosterType[]>(
    `/posts/channel/${CATEGORY_DEFAULT_NOTEBOOK_ID}`
  );

  return data;
};

export const getAllReviewPoster = async (channelId: string) => {
  const { data } = await api.get<ReviewPosterType[]>(`/posts/channel/${channelId}`);

  return data;
};
