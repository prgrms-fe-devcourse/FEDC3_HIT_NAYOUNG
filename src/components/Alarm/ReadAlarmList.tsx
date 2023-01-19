import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { alarmsState } from '@/store/Alarm';
import AlarmItem from '@/components/Alarm/AlarmItem';

const ReadAlarmList = () => {
  const { readAlarms } = useRecoilValue(alarmsState);

  const isEmptyReadAlarms = useMemo(() => {
    return readAlarms.length === 0;
  }, [readAlarms]);

  return (
    <div>
      <h2 className="text-xl mb-2">읽은 알람</h2>
      {isEmptyReadAlarms ? (
        <div className="text-TEXT_SUB_GRAY text-sm pt-2">새로운 알람이 없습니다.</div>
      ) : (
        <>
          {readAlarms.map((alarmItem) => (
            <AlarmItem key={alarmItem._id} alarmItem={alarmItem} />
          ))}
        </>
      )}
    </div>
  );
};

export default ReadAlarmList;
