import { User } from '@/types';
import { getCategoryNameToMatchingId } from '@/utils/category';

import ReviewItem from './ReviewItem';

type ReviewListProps = {
  user: User;
};

const ReviewList = ({ user }: ReviewListProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5 max-w-xl">
      {user.posts.length === 0 ? (
        <div className="mt-10 col-start-2">
          <div>작성하신 리뷰가 없습니다.</div>
        </div>
      ) : (
        user.posts.map((post) => {
          const channel = getCategoryNameToMatchingId(post.channel);
          return (
            <ReviewItem
              key={post._id}
              post={post}
              categoryPathName={`category/${channel}`}
              id={post._id}
            />
          );
        })
      )}
    </div>
  );
};

export default ReviewList;
