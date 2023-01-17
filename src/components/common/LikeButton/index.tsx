import api from '@/Api/api';
import { callCreateLikeAPI, callDeleteLikeAPI } from '@/Api/like';
import { callCreateNotificationAPI } from '@/Api/notification';
import { getUserInformation } from '@/Api/user';
import { likeState } from '@/store/recoilLikeState';
import { reviewDetailState } from '@/store/recoilReviewDetailState';
import { LIKE } from '@/utils/constants';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';

const LikeButton = () => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [userId, setUserId] = useState();
  const likePropState = useRecoilValue(likeState);
  const { author } = useRecoilValue(reviewDetailState);

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserInformation();
      setUserId(user._id);
    };
    likePropState?.likes.forEach((like) => {
      if (like.user === userId) {
        return setLikeId(like._id);
      }
    });

    getUser();
    checkedUserLiked();
  }, [userId]);

  const checkedUserLiked = () => {
    if (!userId) return;
    likePropState &&
      likePropState.likes.forEach((like) => {
        if (like.user === userId) {
          return setLikeToggle(true);
        }
      });
  };

  const debouncing = (func: Function, timeout = 1000) => {
    let timer: any | number = null;
    clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };

  const delayFunc = () => {
    console.log('딜레이');
  };

  const onToggleLikeButton = async () => {
    debouncing(delayFunc);
    if (likeToggle) {
      callDeleteLikeAPI(likeId);
    } else {
      const likeAPIBody = {
        postId: likePropState?.id,
      };
      const data = await callCreateLikeAPI(likeAPIBody);

      if (!data) return false;
      setLikeId(data._id);

      if (data.user !== author._id) {
        // 알림 보내기
        const callCreateNotificationAPIBody = {
          notificationType: LIKE,
          notificationTypeId: data._id,
          userId: author._id,
          postId: data.post,
        };
        await callCreateNotificationAPI(callCreateNotificationAPIBody);
      }
    }

    setLikeToggle(!likeToggle);
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
