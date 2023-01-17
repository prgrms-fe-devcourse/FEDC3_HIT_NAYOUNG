import api from './api';

const SPECIFIED_CATEGORY_ID = '63bd141d93836272216d324a';

export const getSpecifiedReviewPoster = () =>
  api.get(`/posts/channel/${SPECIFIED_CATEGORY_ID}`);

export const getAllReviewPoster = (channelId: string) =>
  api.get(`/posts/channel/${channelId}`);
