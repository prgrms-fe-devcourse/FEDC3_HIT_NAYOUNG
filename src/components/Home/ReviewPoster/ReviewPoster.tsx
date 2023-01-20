import { Link, useLocation } from 'react-router-dom';

import { ReviewPosterType } from '@/types';

import { BASE_CATEGORY_ROUTER_NAME } from '@/utils/constants';

// @param id - 선택한 포스터로 이동하기 위한 역할

const ReviewPoster = ({ id, title, image, author }: Omit<ReviewPosterType, '_id'>) => {
  const { pathname } = useLocation();
  const SLASH_NUMBER = 1;
  const categoryPathName =
    pathname === '/' ? BASE_CATEGORY_ROUTER_NAME : pathname.slice(SLASH_NUMBER);
  const content = JSON.parse(title);

  return (
    <Link
      className="flex flex-col justify-center w-full h-60 md:h-64 lg:h-72 group cursor-pointer mb-5"
      to={`/${categoryPathName}/detail`}
      state={{ id }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-md group-hover:opacity-75">
        <img
          src={image}
          alt="review poster image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex justify-between items-center pt-2 text-base">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-TEXT_BASE_BLACK">
          <span>{content.title}</span>
        </h3>
        <span className="font-medium text-TEXT_SUB_GRAY">{author.fullName}</span>
      </div>
    </Link>
  );
};

export default ReviewPoster;
