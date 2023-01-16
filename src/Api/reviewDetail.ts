import api from '@/Api/api';

const callGetReviewDetailAPI = async (id: string) => {
  try {
    const { data } = await api.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { callGetReviewDetailAPI };
