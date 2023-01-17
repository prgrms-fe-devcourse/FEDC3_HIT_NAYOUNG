import { getAllReviewPoster } from '@/Api/reviewPoster';
import { InformLoginModal, InformLogOutModal } from '@/components/Modal';
import ReviewCount from '@/components/ReviewList/ReviewCount';
import ReviewListHeader from '@/components/ReviewList/ReviewListHeader';
import ReviewListSection from '@/components/ReviewList/ReviewListSection';
import { ReviewPosterType } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ReviewList = () => {
  const [reviews, setReviews] = useState<ReviewPosterType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    state: { id: channelId, name: categoryName },
  } = useLocation();

  const reviewCount = useMemo(() => reviews.length, [reviews]);

  useEffect(() => {
    const getReviewAllData = async () => {
      try {
        setLoading(true);
        const response = await getAllReviewPoster(channelId);
        const reviewListData = response.data.map(
          ({ _id, title, image }: Omit<ReviewPosterType, 'id'>) => ({
            id: _id,
            title,
            image,
          })
        );

        setReviews(reviewListData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getReviewAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pt-6 max-w-xl w-full h-full mx-auto px-6">
        <ReviewListHeader categoryName={categoryName} />
        <ReviewCount reviewCount={reviewCount} />
        <ReviewListSection reviews={reviews} reviewCount={reviewCount} />
        <InformLoginModal />
        <InformLogOutModal />
      </div>
    );
  }
};

export default ReviewList;
