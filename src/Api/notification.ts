import api from './api';
import { getAxiosHeader } from './user';

type CreateNotificationType = {
  notificationType: string;
  notificationTypeId: string;
  userId: string;
  postId: string;
};

const callCreateNotificationAPI = async (
  createNotificationAPIBody: CreateNotificationType
) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    await api.post('/notifications/create', createNotificationAPIBody, {
      headers,
    });
  } catch (error) {
    console.log(error);
  }
};

export { callCreateNotificationAPI };
