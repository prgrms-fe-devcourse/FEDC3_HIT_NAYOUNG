import AlarmContainer from '@/components/Alarm';
import { InformLogOutModal } from '@/components/Modal';

// TODO: suspense로 wrapping 할 예정
const Alarm = () => {
  return (
    <div className="pt-10">
      <AlarmContainer />
      <InformLogOutModal />
    </div>
  );
};

export default Alarm;
