import AlarmContainer from '@/components/Alarm';
import { InformLogOutModal } from '@/components/Modal';

// TODO: suspense로 wrapping 할 예정
const Alarm = () => {
  return (
    <div className="flex justify-center">
      <AlarmContainer />
      <InformLogOutModal />
    </div>
  );
};

export default Alarm;
