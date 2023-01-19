import api from './api';
import { getAxiosHeader } from './user';

type CreateAlarmType = {
  notificationType: string;
  notificationTypeId: string;
  userId: string;
  postId: string | null;
};

const callCreateAlarmAPI = async (createAlarmAPIBody: CreateAlarmType) => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    await api.post('/notifications/create', createAlarmAPIBody, {
      headers,
    });
  } catch (error) {
    console.log(error);
  }
};

export { callCreateAlarmAPI };
