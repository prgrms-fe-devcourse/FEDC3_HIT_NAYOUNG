import { User } from '@/types';

type ReviewAndFollowProps = {
  user: User;
};

const ReviewAndFollow = ({ user }: ReviewAndFollowProps) => {
  return (
    <div className="mt-10">
      <ul className="flex justify-around text-center min-w-[300px]">
        <li className="cursor-pointer">
          <div>게시물</div>
          <div>{user.posts.length || 0}</div>
        </li>
        <li className="cursor-pointer">
          <div>팔로워</div>
          <div>{user.followers.length || 0}</div>
        </li>
        <li className="cursor-pointer">
          <div>팔로잉</div>
          <div>{user.following.length || 0}</div>
        </li>
      </ul>
    </div>
  );
};

export default ReviewAndFollow;
