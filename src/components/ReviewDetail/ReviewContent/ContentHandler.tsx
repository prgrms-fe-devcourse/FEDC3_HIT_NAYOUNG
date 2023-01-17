import { callDeleteReviewDetailAPI } from '@/Api/reviewDetail';
import { reviewDetailState } from '@/store/recoilReviewDetailState';
import { CREATE_REVIEW_PAGE, USER_PAGE } from '@/utils/constants';
import { formatDate } from '@/utils/format';
import { BsTrash } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Button from '@/components/ReviewDetail/ReviewContent/Button';

const ContentHandler = () => {
  const {
    state: { id },
  } = useLocation();
  const navigate = useNavigate();
  const { userId, author, title, image, channel, createdAt } =
    useRecoilValue(reviewDetailState);

  const updateBodyProp = {
    title,
    image,
    channelId: channel._id,
  };

  const onMovePage = async (page: 'userPage' | 'reviewUpdate' | 'reviewDelete') => {
    switch (page) {
      case 'userPage':
        navigate(USER_PAGE, { state: author._id });
        return;
      case 'reviewUpdate':
        navigate(CREATE_REVIEW_PAGE, { state: updateBodyProp });
        return;
      case 'reviewDelete':
        // TODO 모달 컴포넌트로 변경 예정 @chunwookJoo
        if (confirm('해당 게시글을 삭제할까요?')) {
          await callDeleteReviewDetailAPI(id);
          navigate(`/category/${channel.name}`, {
            state: { id: channel._id, name: channel.name },
          });
        }
        return;
    }
  };

  return (
    <div className="flex items-center justify-between mb-8 text-TEXT_SUB_GRAY">
      <div
        onClick={() => onMovePage('userPage')}
        className="avatar hover:cursor-pointer hover:text-TEXT_BASE_BLACK items-center gap-2"
      >
        <div className={`rounded-full`}>
          <img
            className="max-w-[36px]"
            src={author.image ? author.image : 'https://placeimg.com/200/200/arch'}
          />
        </div>
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
  );
};

export default ContentHandler;
