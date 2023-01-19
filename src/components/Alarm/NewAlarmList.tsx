import { useRecoilState } from 'recoil';
import { alarmsState } from '@/store/Alarm';
import AlarmItem from '@/components/Alarm/AlarmItem';
import Button from '@/components/ReviewCreateForm/Button';
import { updateAlarmSeenState } from '@/Api/alarm';
import { useMemo } from 'react';

const NewAlarmList = () => {
  const [{ newAlarms, readAlarms }, setAlarms] = useRecoilState(alarmsState);

  const isEmptyNewAlarms = useMemo(() => {
    return newAlarms.length === 0;
  }, [newAlarms]);

  const onClickAllAlarmSeen = () => {
    setAlarms({
      newAlarms: [],
      readAlarms: [...newAlarms, ...readAlarms],
    });
    updateAlarmSeenState();
  };

  return (
    <div>
      <div className="flex flex-col">
        <section className="flex justify-between">
          <h2 className="text-xl">새로운 알람</h2>
          {!isEmptyNewAlarms && (
            <Button
              type="button"
              name="전체 읽음"
              style="bg-BASE p-2.5 rounded-xl hover:bg-HOVER"
              clickHandler={onClickAllAlarmSeen}
            />
          )}
        </section>
        {isEmptyNewAlarms ? (
          <div className="text-TEXT_SUB_GRAY text-sm pt-2">새로운 알람이 없습니다.</div>
        ) : (
          <>
            {newAlarms.map((alarmItem) => (
              <AlarmItem key={alarmItem._id} alarmItem={alarmItem} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewAlarmList;
