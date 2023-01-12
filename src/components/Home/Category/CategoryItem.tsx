import { AiOutlineLaptop } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { FiMonitor, FiHeadphones } from 'react-icons/fi';
import { IoWatchOutline } from 'react-icons/io5';
import { BsKeyboard } from 'react-icons/bs';
import { Category, CategoryNameAndIcon } from '@/types';
import { Link } from 'react-router-dom';
import { REVIEW_LIST_PAGE } from '@/utils/constants';

const categoryIcon: CategoryNameAndIcon = {
  노트북: AiOutlineLaptop,
  키보드: BsKeyboard,
  휴대폰: GiSmartphone,
  모니터: FiMonitor,
  오디오: FiHeadphones,
  시계: IoWatchOutline,
};

const CategoryItem = ({ name, posts }: Category) => {
  const Icon = categoryIcon[name];

  return (
    <Link to={`/${REVIEW_LIST_PAGE}`}>
      <section className="w-36 m-1 flex flex-col items-start p-2.5 text-TEXT_BASE_BLACK border-BASE border rounded-xl cursor-pointer">
        <div className="border-BASE border-2 rounded-full p-2">
          <Icon className="text-xl" />
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
