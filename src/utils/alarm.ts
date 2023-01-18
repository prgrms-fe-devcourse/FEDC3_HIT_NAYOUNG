import { AlarmItemType } from '@/types';

// 알림 읽은상태(seen)에 따라 분리
export const separateAlarmSeenState = (alarms: AlarmItemType[]) => {
  const newAlarms: AlarmItemType[] = [];
  const readAlarms: AlarmItemType[] = [];

  alarms.forEach((alarm) => {
    const { seen } = alarm;

    if (!seen) {
      newAlarms.push(alarm);
    } else {
      readAlarms.push(alarm);
    }
  });

  return { newAlarms, readAlarms };
};
