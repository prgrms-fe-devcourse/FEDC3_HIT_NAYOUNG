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
      <section className="flex flex-col p-5 border-2 border-GRAY_100 rounded gap-5 h-screen w-5/12 max-md:border-none max-md:w-full max-md:p-5">
        {loading ? (
          <div>Loading..</div>
        ) : (
          <>
            <NewAlarmList />
            <ReadAlarmList />
          </>
        )}
      </section>
    </>
  );
};

export default AlarmContainer;
