import api from './api';
import { getAxiosHeader } from './user';

const createLikeAPI = async (likeAPIBody: { postId: string }) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const { data } = await api.post('/likes/create', likeAPIBody, {
      headers,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteLikeAPI = async (likeId: string) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    await api.delete('/likes/delete', {
      data: {
        id: likeId,
      },
      headers,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createLikeAPI, deleteLikeAPI };
