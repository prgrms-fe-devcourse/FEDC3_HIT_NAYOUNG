import { atom } from 'recoil';
import { AlarmItemType } from '@/types';

export const alarmsState = atom<{
  newAlarms: AlarmItemType[];
  readAlarms: AlarmItemType[];
}>({
  key: 'AlarmsState',
  default: {
    newAlarms: [],
    readAlarms: [],
  },
});
