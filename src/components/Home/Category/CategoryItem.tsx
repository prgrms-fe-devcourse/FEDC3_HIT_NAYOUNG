import { Link } from 'react-router-dom';
import { AiOutlineLaptop } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { FiMonitor, FiHeadphones } from 'react-icons/fi';
import { IoWatchOutline } from 'react-icons/io5';
import { BsKeyboard } from 'react-icons/bs';
import { Category, CategoryNameAndIcon } from '@/types';
import styled from '@emotion/styled';
import { MOBILE_SCREEN } from '@/utils/constants';

const StyledLink = styled(Link)`
  width: 47.5%;

  @media (min-width: ${MOBILE_SCREEN}) {
    width: 30%;
  }
`;

const categoryIcon: CategoryNameAndIcon = {
  노트북: AiOutlineLaptop,
  키보드: BsKeyboard,
  휴대폰: GiSmartphone,
  모니터: FiMonitor,
  오디오: FiHeadphones,
  시계: IoWatchOutline,
};

const CategoryItem = ({ _id, name, posts }: Category) => {
  const Icon = categoryIcon[name];

  return (
    <StyledLink to={`/category/${name}`} state={{ id: _id, name }}>
      <section className="w-full flex flex-col items-start p-2.5 text-TEXT_BASE_BLACK border-BASE border rounded-xl cursor-pointer">
        <div className="border-BASE border-1 rounded-full p-2">
          <Icon className="text-xl" />
        </div>
        <div className="text-lg">{name}</div>
        <span className="text-gray-400 text-sm">
          {posts.length ? posts.length : 0} reviews
        </span>
      </section>
    </StyledLink>
  );
};

export default CategoryItem;
