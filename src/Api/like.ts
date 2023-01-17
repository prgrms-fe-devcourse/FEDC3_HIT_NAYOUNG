import api from './api';
import { getAxiosHeader } from './user';

const callCreateLikeAPI = async (callCreateLikeAPIBody: object) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const { data } = await api.post('/likes/create', callCreateLikeAPIBody, {
      headers,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

const callDeleteLikeAPI = async (likeId: string) => {
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

export { callCreateLikeAPI, callDeleteLikeAPI };
