import { UserPost } from '@/types';
import { Link } from 'react-router-dom';
import Figure from './Figure';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

type ReviewItemProps = {
  post: UserPost;
  categoryPathName: string;
  id: string;
};

const ReviewItem = ({ post, categoryPathName, id }: ReviewItemProps) => {
  return (
    <Link
      key={id}
      className="h-40 border-HOVER cursor-pointer relative overflow-hidden"
      to={`/${categoryPathName}/detail`}
      state={{ id }}
    >
      <Figure>
        <img
          className="object-fill object-center w-52 h-52"
          src={post.image || 'https://cdn-icons-png.flaticon.com/512/261/261283.png'}
        />
        <figcaption className="flex items-center justify-around">
          <div className="flex gap-2 items-center">
            <AiFillHeart />
            {post.likes.length}
          </div>
          <div className="flex gap-2 items-center">
            <FaComment /> {post.comments.length}
          </div>
        </figcaption>
      </Figure>
    </Link>
  );
};

export default ReviewItem;
