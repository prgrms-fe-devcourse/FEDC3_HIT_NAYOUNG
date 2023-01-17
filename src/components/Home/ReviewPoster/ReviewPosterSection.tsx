import { ExtractedReviewPosterType } from '@/types/review';

import ReviewPoster from './ReviewPoster';

type ReviewPosterSectionPropsType = {
  specifiedPoster: Omit<ExtractedReviewPosterType, '_id'>[];
  titleStyle: string;
};

const ReviewPosterSection = ({
  specifiedPoster,
  titleStyle,
}: ReviewPosterSectionPropsType) => {
  const [firstSpecifiedPoster, lastSpecifiedPoster] = specifiedPoster;

  return (
    <>
      <h2 className={titleStyle}>추천 리뷰 게시글</h2>
      <ReviewPoster
        id={firstSpecifiedPoster.id}
        title={firstSpecifiedPoster.title}
        image={firstSpecifiedPoster.image}
      />
      <ReviewPoster
        id={lastSpecifiedPoster.id}
        title={lastSpecifiedPoster.title}
        image={lastSpecifiedPoster.image}
      />
    </>
  );
};

export default ReviewPosterSection;
