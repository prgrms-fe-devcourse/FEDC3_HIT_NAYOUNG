import { callDeleteReviewDetailAPI } from '@/Api/reviewDetail';
import { reviewDeleteState, reviewDetailState } from '@/store/recoilReviewState';
import { UPDATE_REVIEW_PAGE, USER_PAGE } from '@/utils/constants';
import { formatDate } from '@/utils/format';
import { BsTrash } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Button from '@/components/ReviewDetail/ReviewContent/Button';
import { toast } from 'react-toastify';
import { REVIEW_DELETE } from '@/components/Toast/ToastText';
import { ConfirmDeleteModal } from '@/components/Modal';
import { useEffect } from 'react';
import { confirmDeleteReviewModalState } from '@/store/recoilModalState';
import Avatar from '@/components/common/Avatar';

const ContentHandler = () => {
  const {
    state: { id },
  } = useLocation();
  const navigate = useNavigate();
  const { userId, author, title, image, channel, createdAt } =
    useRecoilValue(reviewDetailState);

  const [isDeleteReview, setIsDeleteReview] = useRecoilState(reviewDeleteState);
  const setOpen = useSetRecoilState<boolean>(confirmDeleteReviewModalState);

  useEffect(() => {
    (async () => {
      if (isDeleteReview) {
        await callDeleteReviewDetailAPI(id);
        setIsDeleteReview(false);
        setOpen(false);
        navigate(`/category/${channel.name}`, {
          state: { id: channel._id, name: channel.name },
        });
        toast.success(REVIEW_DELETE);
      }
    })();
  }, [isDeleteReview]);

  const onMovePage = async (page: 'userPage' | 'reviewUpdate' | 'reviewDelete') => {
    const updateBodyProp = {
      postId: id,
      title,
      image,
      channel: channel,
    };

    switch (page) {
      case 'userPage':
        navigate(USER_PAGE, { state: { id: author._id } });
        return;
      case 'reviewUpdate':
        navigate(UPDATE_REVIEW_PAGE, { state: updateBodyProp });
        return;
      case 'reviewDelete':
        setOpen(true);
        return;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8 text-TEXT_SUB_GRAY">
        <div
          onClick={() => onMovePage('userPage')}
          className="avatar hover:cursor-pointer hover:text-TEXT_BASE_BLACK items-center gap-2"
        >
          <Avatar image={author.image} size={9} style={'max-w-[36px]'} />
          <span>{author.fullName}</span>
        </div>
        <div className="flex items-center gap-2 text-TEXT_BASE_BLACK">
          <span>{formatDate(createdAt)}</span>
          {userId === author._id && (
            <>
              <Button
                childrenIcon={<FaRegEdit className="text-xl" />}
                tooltipText="글 수정"
                page="reviewUpdate"
                onMovePage={onMovePage}
              />
              <Button
                childrenIcon={<BsTrash className="text-xl" />}
                tooltipText="글 삭제"
                page="reviewDelete"
                onMovePage={onMovePage}
              />
            </>
          )}
        </div>
      </div>
      <ConfirmDeleteModal target="review" text="리뷰를 삭제하시겠습니까?" />
    </>
  );
};

export default ContentHandler;
