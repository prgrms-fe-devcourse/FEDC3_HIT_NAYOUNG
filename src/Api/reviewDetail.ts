import api from '@/Api/api';
import { getAxiosHeader } from '@/Api/user';

const callGetReviewDetailAPI = async (id: string) => {
  try {
    const { data } = await api.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const callDeleteReviewDetailAPI = async (id: string) => {
  try {
    const header = getAxiosHeader();
    if (!header) return false;
    await api.delete('/posts/delete', {
      data: {
        id,
      },
      headers: header,
    });
  } catch (error) {
    console.log(error);
  }
};

export { callGetReviewDetailAPI, callDeleteReviewDetailAPI };
