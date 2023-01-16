import { breadCrumbState } from '@/store/store';
import { HOME_PAGE } from '@/utils/constants';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type BreadCrumbLinksType = {
  textSize: string;
};

const BreadCrumbLinks = ({ textSize }: BreadCrumbLinksType) => {
  const { channelId, category } = useRecoilValue(breadCrumbState);

  return (
    <div className={`${textSize} text-TEXT_BASE_BLACK breadcrumbs`}>
      <ul>
        <li>
          <Link to={HOME_PAGE}>카테고리</Link>
        </li>
        <li>
          <Link state={{ id: channelId, name: category }} to={`/category/${category}`}>
            {category}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbLinks;
