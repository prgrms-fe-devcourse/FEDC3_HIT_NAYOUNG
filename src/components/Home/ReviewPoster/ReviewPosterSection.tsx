import { ReviewPosterType } from '@/types';

import ReviewPoster from './ReviewPoster';

type ReviewPosterSectionPropsType = {
  specifiedPoster: Omit<ReviewPosterType, '_id'>[];
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
        author={firstSpecifiedPoster.author}
      />
      <ReviewPoster
        id={lastSpecifiedPoster.id}
        title={lastSpecifiedPoster.title}
        image={lastSpecifiedPoster.image}
        author={lastSpecifiedPoster.author}
      />
    </>
  );
};

export default ReviewPosterSection;
