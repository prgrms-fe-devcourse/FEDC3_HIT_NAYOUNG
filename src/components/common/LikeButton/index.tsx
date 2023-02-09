import { createLikeAPI, deleteLikeAPI } from '@/Api/like';
import { callCreateAlarmAPI } from '@/Api/notification';
import { getUserInformation } from '@/Api/user';
import { likeState } from '@/store/recoilLikeState';
import { reviewDetailState } from '@/store/recoilReviewState';
import { LIKE } from '@/utils/constants';
import { isCheckedLike } from '@/utils/like';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';

const LikeButton = () => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [userId, setUserId] = useState('');
  const likePropState = useRecoilValue(likeState);
  const didMount = useRef(false);

  const { author } = useRecoilValue(reviewDetailState);

  useEffect(() => {
    const { isChecked, likeId } = isCheckedLike(likePropState?.likes, userId);
    const getUser = async () => {
      const user = await getUserInformation();
      setUserId(user._id);
    };

    setLikeToggle(isChecked);
    setLikeId(likeId);
    getUser();
  }, [userId]);

  useEffect(() => {
    if (didMount.current) {
      const timer = setTimeout(() => {
        if (likeToggle) onLikeAndAlarm();
        else onUnLike();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [likeToggle]);

  const onToggleLikeButton = () => {
    setLikeToggle(!likeToggle);
    didMount.current = true;
  };

  const onLikeAndAlarm = async () => {
    const likeAPIBody = {
      postId: likePropState?.id,
    };

    const data = await createLikeAPI(likeAPIBody);

    if (!data) return false;
    setLikeId(data._id);

    if (data.user !== author._id) {
      // 알림 보내기
      const alarmAPIBody = {
        notificationType: LIKE,
        notificationTypeId: data._id,
        userId: author._id,
        postId: data.post,
      };
      await callCreateAlarmAPI(alarmAPIBody);
    }
  };

  const onUnLike = () => {
    deleteLikeAPI(likeId);
  };

  return (
    <div>
      <button
        onClick={onToggleLikeButton}
        className="hover:cursor-pointer tooltip tooltip-top"
        data-tip="좋아요"
      >
        {likeToggle ? (
          <AiFillHeart className="text-2xl text-HOVER" />
        ) : (
          <AiOutlineHeart className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default LikeButton;
