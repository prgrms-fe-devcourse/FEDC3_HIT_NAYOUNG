import AlarmContainer from '@/components/Alarm';

// TODO: suspense로 wrapping 할 예정
const Alarm = () => {
  return (
    <div className="flex justify-center">
      <AlarmContainer />
    </div>
  );
};

export default Alarm;
