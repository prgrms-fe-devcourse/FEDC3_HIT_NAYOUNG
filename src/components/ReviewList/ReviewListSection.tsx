import { ReviewPosterType } from '@/types';

import ReviewPoster from '@/components/Home/ReviewPoster/ReviewPoster';
import { NotFound } from '@/pages';

const ReviewListSection = ({
  reviews,
  reviewCount,
}: {
  reviews: ReviewPosterType[];
  reviewCount: number;
}) => {
  if (reviewCount) {
    return (
      <ul className="">
        {reviews.map(({ id, title, image, author }) => (
          <ReviewPoster key={id} id={id} title={title} image={image} author={author} />
        ))}
      </ul>
    );
  } else {
    return <NotFound message="리뷰 게시글 목록이 없습니다." />;
  }
};

export default ReviewListSection;
