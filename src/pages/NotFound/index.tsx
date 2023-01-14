import { HOME_PAGE } from '@/utils/constants';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center text-center text-TEXT_BASE_BLACK">
      <div className="text-2xl mt-12 italic">404 Page</div>
      <div className="box-border rounded-404 w-80 h-80 mt-10 bg-BASE flex items-center justify-center">
        <div className="text-white text-6xl">HIT</div>
      </div>
      <div className="text-xl mt-10">
        죄송합니다.
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
      <Link to={HOME_PAGE}>
        <button className="btn mt-10 w-72 bg-white border-BASE text-BASE hover:bg-white hover:border-HOVER hover:text-HOVER">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
