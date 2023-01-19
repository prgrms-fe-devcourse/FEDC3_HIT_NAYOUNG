import { AlarmItemType } from '@/types/index.d';
import api from '@/Api/api';

// 알림 가져오기
const getAllAlarmList = async () => {
  try {
    const { data } = await api.get<AlarmItemType[]>('/notifications', {
      headers: {
        Authorization: `bearer ${localStorage.getItem('login-token')}`,
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    // FIXME: 알림 에러핸들링 수정해야함(수화 0118)
    throw new Error('알람 가져오는 api에서 에러발생');
  }
};

// 알림 읽음처리
const updateAlarmSeenState = () => {
  try {
    api.put('/notifications/seen', null, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('login-token')}`,
      },
    });
  } catch (error) {
    throw new Error('알람 읽음처리 api에서 에러발생');
  }
};

export { getAllAlarmList, updateAlarmSeenState };
