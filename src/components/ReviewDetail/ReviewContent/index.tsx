import BreadCrumbLinks from '@/components/common/BreadCrumbLinks';
import LikeButton from '@/components/common/LikeButton';
import { ReviewContentType } from '@/types';
import { formatDate } from '@/utils/format';
import { BsTrash } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';

const ReviewContent = ({
  author,
  title,
  image,
  createdAt,
  userId,
}: ReviewContentType) => {
  const reviewContentData = JSON.parse(title);

  return (
    <section className="mb-4">
      <div className="mb-8">
        <div className="mb-4">
          <img className="max-w-96 w-full max-h-96" src={image} alt="제품 사진" />
        </div>
        <BreadCrumbLinks textSize="text-sm" />
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <h1 className="text-2xl font-bold text-TEXT_BASE_BLACK">
            {reviewContentData.title}
          </h1>
          <LikeButton />
        </div>
        <div className="flex items-center justify-between mb-8 text-TEXT_SUB_GRAY">
          <div className="avatar items-center gap-2">
            <div className={`rounded-full`}>
              <img
                className="max-w-[36px]"
                src={author.image ? author.image : 'https://placeimg.com/200/200/arch'}
              />
            </div>
            <span>{author.fullName}</span>
          </div>
          <div className="flex items-center gap-2 text-TEXT_SUB_GRAY">
            <span>{formatDate(createdAt)}</span>
            {userId === author._id && (
              <>
                <span
                  className="hover:cursor-pointer tooltip tooltip-top"
                  data-tip="글 수정"
                >
                  <FaRegEdit className="text-xl" />
                </span>
                <span
                  className="hover:cursor-pointer tooltip tooltip-top"
                  data-tip="글 삭제"
                >
                  <BsTrash className="text-xl" />
                </span>
              </>
            )}
          </div>
        </div>
        <p className="mb-4 overflow-hidden text-ellipsis whitespace-pre text-TEXT_BASE_BLACK">
          {reviewContentData.contents}
        </p>
        <hr className="bg-GRAY_200 h-0.5" />
      </div>
    </section>
  );
};

export default ReviewContent;
