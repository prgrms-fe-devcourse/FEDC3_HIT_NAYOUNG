import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { getAllAlarmList } from '@/Api/alarm';
import NewAlarmList from '@/components/Alarm/NewAlarmList';
import ReadAlarmList from '@/components/Alarm/ReadAlarmList';
import { separateAlarmSeenState } from '@/utils/alarm';
import { alarmsState } from '@/store/Alarm';

const AlarmContainer = () => {
  const setAlarms = useSetRecoilState(alarmsState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAlarm = async () => {
      const alarmData = await getAllAlarmList();
      const { newAlarms, readAlarms } = separateAlarmSeenState(alarmData);
      setAlarms({ newAlarms, readAlarms });
    };
    getAlarm();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <section className="flex flex-col p-5 border-2 border-GRAY_100 rounded max-md:border-none gap-5">
          <NewAlarmList />
          <ReadAlarmList />
        </section>
      )}
    </>
  );
};

export default AlarmContainer;
