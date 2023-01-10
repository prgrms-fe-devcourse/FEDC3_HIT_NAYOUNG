import { InformLoginModal } from '@/components/Modal';
import { informLoginModalState } from '@/store/store';
import { useRecoilState } from 'recoil';

const Home = () => {
  const [open, setOpen] = useRecoilState(informLoginModalState);
  return (
    <div>
      <button className="btn" onClick={() => setOpen(true)}>
        오픈
      </button>
      <InformLoginModal />
    </div>
  );
};

export default Home;
