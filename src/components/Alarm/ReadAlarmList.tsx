import { useRecoilValue } from 'recoil';
import { alarmsState } from '@/store/Alarm';
import AlarmItem from '@/components/Alarm/AlarmItem';

const ReadAlarmList = () => {
  const { readAlarms } = useRecoilValue(alarmsState);

  return (
    <div>
      <h2 className="text-xl mb-2">읽은 알람</h2>
      {readAlarms.map((alarmItem) => (
        <AlarmItem key={alarmItem._id} alarmItem={alarmItem} />
      ))}
    </div>
  );
};

export default ReadAlarmList;
