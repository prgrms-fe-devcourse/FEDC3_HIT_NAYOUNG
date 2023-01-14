import api from './api';

export const callCommentDeleteAPI = async (commentId: string) => {
  const loginToken = localStorage.getItem('login-token');
  try {
    const { data } = await api.delete('/comments/delete', {
      data: {
        id: commentId,
      },
      headers: {
        Authorization: `bearer ${loginToken}`,
      },
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};
