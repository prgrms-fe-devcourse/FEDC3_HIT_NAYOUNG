import api from './api';

const SPECIFIED_CATEGORY_ID = '63bd045193836272216d31bc';

export const getSpecifiedReviewPoster = () =>
  api.get(`/posts/channel/${SPECIFIED_CATEGORY_ID}`);
