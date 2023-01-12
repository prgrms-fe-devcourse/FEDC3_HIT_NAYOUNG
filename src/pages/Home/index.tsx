import { InformLoginModal } from '@/components/Modal';
import { informLoginModalState } from '@/store/store';
import { useRecoilState } from 'recoil';

const Home = () => {
  const [open, setOpen] = useRecoilState(informLoginModalState);
  return (
    <div className="w-96 mx-auto my-0">
      <button className="btn" onClick={() => setOpen(true)}>
        오픈
      </button>
      <InformLoginModal />
    </div>
  );
};

export default Home;
