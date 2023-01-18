import { Post } from '@/types';
import { Link } from 'react-router-dom';
import Figure from './Figure';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
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

type ReviewItemProps = {
  post: Post;
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
      {post.image ? (
        <Figure>
          <img className="object-fill object-center w-52 h-52" src={post.image} />
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
      ) : (
        <Figure>
          <img
            className="object-cover"
            src="https://cdn-icons-png.flaticon.com/512/261/261283.png"
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
      )}
    </Link>
  );
};

export default ReviewItem;
