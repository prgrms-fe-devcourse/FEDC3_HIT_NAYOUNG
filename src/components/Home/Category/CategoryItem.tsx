import { AiOutlineLaptop } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { FiMonitor, FiHeadphones } from 'react-icons/fi';
import { IoWatchOutline } from 'react-icons/io5';
import { BsKeyboard } from 'react-icons/bs';
import { Category, CategoryNameAndIcon } from '@/types';
import { Link } from 'react-router-dom';
import { REVIEW_LIST_PAGE } from '@/utils/constants';
import styled from '@emotion/styled';

// tailwind css에 원하는 percentage가 존재하지 않아서 @emotion을 사용했니다.
// 더 좋은 방법이 있다면 의견 남겨주세요.
const StyledLink = styled(Link)`
  width: 47.5%;

  @media (min-width: 768px) {
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

const CategoryItem = ({ name, posts }: Category) => {
  const Icon = categoryIcon[name];

  return (
    <StyledLink to={`/${REVIEW_LIST_PAGE}`}>
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
