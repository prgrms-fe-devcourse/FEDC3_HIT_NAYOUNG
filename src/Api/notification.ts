import api from './api';
import { getAxiosHeader } from './user';

const callCreateNotificationAPI = async (callCreateNotificationAPIBody: object) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    await api.post('/notifications/create', callCreateNotificationAPIBody, {
      headers,
    });
  } catch (error) {
    console.log(error);
  }
};

export { callCreateNotificationAPI };
