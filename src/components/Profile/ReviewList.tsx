import { Post, UserDataProps } from '@/types';
import { ReactNode } from 'react';
import ReviewItem from './ReviewItem';

// localstorage getItem 할 것
const categoryName = [
  {
    name: '노트북',
    id: '63bd045193836272216d31bc',
  },
  {
    name: '키보드',
    id: '63bd140193836272216d323e',
  },
  {
    name: '휴대폰',
    id: '63bd140b93836272216d3242',
  },
  {
    name: '모니터',
    id: '63bd141693836272216d3246',
  },
  {
    name: '오디오',
    id: '63bd141d93836272216d324a',
  },
  {
    name: '시계',
    id: '63bd143493836272216d324e',
  },
];

type ReviewListProps = {
  user: UserDataProps;
};

const ReviewList = ({ user }: ReviewListProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5 max-w-xl">
      {user.posts.length === 0 ? (
        <div className="mt-10 col-start-2">
          <div>작성하신 리뷰가 없습니다.</div>
        </div>
      ) : (
        user.posts.map((post: Post): ReactNode => {
          const id = post._id;
          const channel = categoryName.filter((category) => category.id === post.channel);
          const categoryPathName = `category/${channel[0]?.name}`;
          return (
            <ReviewItem
              key={id}
              post={post}
              categoryPathName={categoryPathName}
              id={id}
            />
          );
        })
      )}
    </div>
  );
};

export default ReviewList;
