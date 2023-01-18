import api from '@/Api/api';
import { getAxiosHeader } from './user';

const getFollowUser = async (userId: string) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const followResponse = await api.post('/follow/create',
      { userId },
      { headers }
    );
    return followResponse.data
  } catch (error) {
    console.error(error)
  }
}

const getUnfollowUser = async (followId: string) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const unfollowResponse = await api.delete('/follow/delete', {
      data: {
        id: followId
      },
      headers
    });
    return unfollowResponse.data;
  } catch (error) {
    console.error(error)
  }
}

export { getFollowUser, getUnfollowUser };
