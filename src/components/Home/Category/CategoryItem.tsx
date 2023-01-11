import { AiOutlineLaptop } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { FiMonitor, FiHeadphones } from 'react-icons/fi';
import { IoWatchOutline } from 'react-icons/io5';
import { BsKeyboard } from 'react-icons/bs';
import { categoryItem, categoryNameAndIcon } from '@/types';
import { Link } from 'react-router-dom';

const categoryIcon: categoryNameAndIcon = {
  노트북: <AiOutlineLaptop />,
  키보드: <BsKeyboard />,
  휴대폰: <GiSmartphone />,
  모니터: <FiMonitor />,
  오디오: <FiHeadphones />,
  시계: <IoWatchOutline />,
};

// ? 이거 mapping하면 style은 어캐주지?
const CategoryItem = ({ name, posts }: categoryItem) => {
  return (
    <Link to={`/${name}`}>
      <section className="w-36 m-1 flex flex-col items-start p-2.5 border-black border rounded-xl cursor-pointer">
        <div className="border-[#FFC7C7] border rounded-full p-2">
          {categoryIcon[name]}
        </div>
        <div className="text-lg">{name}</div>
        <span className="text-gray-400 text-sm">
          {posts.length ? posts.length : 0} reviews
        </span>
      </section>
    </Link>
  );
};

export default CategoryItem;
