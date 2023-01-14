import { ReviewPosterType } from '@/types';
import ReviewPoster from '@/components/Home/ReviewPoster';

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
        {reviews.map(({ id, title, image }) => (
          <ReviewPoster key={id} id={id} title={title} image={image} />
        ))}
      </ul>
    );
  } else {
    return (
      <div>
        404 페이지로 이동(404 페이지에서 text만 리뷰 게시글이 없다고 알려주면 좋을 듯)
      </div>
    );
  }
};

export default ReviewListSection;
