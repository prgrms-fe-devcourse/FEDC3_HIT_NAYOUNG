import { InformLoginModal, InformLogOutModal } from '@/components/Modal';
import ReviewCreateForm from '@/components/ReviewCreateForm';

const ReviewCreate = () => {
  return (
    <div className="h-full pt-16">
      <ReviewCreateForm />
      <InformLogOutModal />
    </div>
  );
};

export default ReviewCreate;
