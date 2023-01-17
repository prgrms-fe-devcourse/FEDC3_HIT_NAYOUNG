import { useMemo } from 'react';
import BreadCrumbLinks from '@/components/common/BreadCrumbLinks';
import LikeButton from '@/components/common/LikeButton';
import { ReviewContentType } from '@/types';
import ContentHandler from './ContentHandler';

const ReviewContent = ({ title, image }: ReviewContentType) => {
  const reviewContentData = JSON.parse(title);
  // const reviewContentData: { title: string; contents: string } = useMemo(() => {
  //   JSON.parse(title);
  // }, [title]);

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
        <ContentHandler />
        <p className="mb-4 overflow-hidden text-ellipsis whitespace-pre text-TEXT_BASE_BLACK">
          {reviewContentData.contents}
        </p>
        <hr className="bg-GRAY_200 h-0.5" />
      </div>
    </section>
  );
};

export default ReviewContent;
