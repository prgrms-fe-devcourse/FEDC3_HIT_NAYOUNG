import api from './api';
import { getAxiosHeader } from './user';

// 댓글 생성
const callCreateCommentAPI = async (callCreateCommentAPIBody: object) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const { data } = await api.post('/comments/create', callCreateCommentAPIBody, {
      headers,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 댓글 삭제
const callCommentDeleteAPI = async (commentId: string) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const { data } = await api.delete('/comments/delete', {
      data: {
        id: commentId,
      },
      headers,
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export { callCommentDeleteAPI, callCreateCommentAPI };
