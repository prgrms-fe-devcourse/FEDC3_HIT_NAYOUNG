import LikeButton from '@/components/common/LikeButton';
import { HOME_PAGE, REVIEW_LIST_PAGE } from '@/utils/constants';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/format';

type ReviewContentProps = {
  author: string;
  title: string;
  imageUrl: string;
  category: string;
  createdAt: string;
};

const ReviewContent = ({
  author,
  title,
  imageUrl,
  category,
  createdAt,
}: ReviewContentProps) => {
  console.log(author);

  return (
    <section className="mb-4">
      <div className="mb-8">
        <div className="mb-4">
          <img className="max-w-96 w-full max-h-96" src={imageUrl} alt="제품 사진" />
        </div>
        <div className="text-sm text-TEXT_BASE_BLACK breadcrumbs ">
          <ul>
            <li>
              <Link to={HOME_PAGE}>카테고리</Link>
            </li>
            <li>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-TEXT_BASE_BLACK">{title}</h1>
          <LikeButton />
        </div>
        <div className="flex justify-between mb-8 text-TEXT_SUB_GRAY">
          <span>{author}</span>
          <span>{formatDate(createdAt)}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-TEXT_BASE_BLACK">리뷰</h2>
        <p className="mb-4 text-TEXT_BASE_BLACK">여기에는 리뷰내용</p>
        <hr className="bg-GRAY_200 h-0.5" />
      </div>
    </section>
  );
};

export default ReviewContent;
