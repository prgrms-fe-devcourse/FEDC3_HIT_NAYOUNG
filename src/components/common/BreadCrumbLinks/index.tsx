import { reviewDetailState } from '@/store/recoilReviewDetailState';
import { HOME_PAGE } from '@/utils/constants';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type BreadCrumbLinksType = {
  textSize: string;
};

const BreadCrumbLinks = ({ textSize }: BreadCrumbLinksType) => {
  const { channel } = useRecoilValue(reviewDetailState);

  return (
    <div className={`${textSize} text-TEXT_BASE_BLACK breadcrumbs`}>
      <ul>
        <li>
          <Link to={HOME_PAGE}>카테고리</Link>
        </li>
        <li>
          <Link
            state={{ id: channel._id, name: channel.name }}
            to={`/category/${channel.name}`}
          >
            {channel.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbLinks;
