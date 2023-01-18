import { useRecoilState } from 'recoil';
import { alarmsState } from '@/store/Alarm';
import AlarmItem from '@/components/Alarm/AlarmItem';
import Button from '@/components/ReviewCreateForm/Button';

const NewAlarmList = () => {
  const [{ newAlarms }, setAlarms] = useRecoilState(alarmsState);
  // 전체읽음 누르면, setAlarm의 newAlarms -> readAlarms에 넣고, api 호출

  return (
    <div>
      {newAlarms.length === 0 ? (
        <div className="text-TEXT_SUB_GRAY text-sm">새로운 알람이 없습니다</div>
      ) : (
        <div className="flex flex-col">
          <section className="flex justify-between">
            <h2 className="text-xl">새로운 알람</h2>
            <Button
              type="button"
              name="전체읽음"
              style="bg-BASE p-2.5 rounded-xl hover:bg-HOVER"
              clickHandler={() => console.log(`전체읽음 누름`)}
            />
          </section>
          {newAlarms.map((alarmItem) => (
            <AlarmItem key={alarmItem._id} alarmItem={alarmItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewAlarmList;
