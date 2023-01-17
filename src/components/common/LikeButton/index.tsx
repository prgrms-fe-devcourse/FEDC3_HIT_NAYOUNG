import api from '@/Api/api';
import { getUserInformation } from '@/Api/user';
import { likeState } from '@/store/recoilLikeState';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';

const LikeButton = () => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [userId, setUserId] = useState();
  const likePropState = useRecoilValue(likeState);

  const loginToken = localStorage.getItem('login-token');

  let timer: any | number = null;

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

  const likeAPIBody = {
    postId: likePropState?.id,
  };

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
    clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };

  const delayFunc = () => {
    console.log('딜레이');
  };

  const onToggleLikeButton = async () => {
    debouncing(delayFunc);
    if (likeToggle) {
      try {
        const response = await api.delete('/likes/delete', {
          data: {
            id: likeId,
          },
          headers: {
            Authorization: `bearer ${loginToken}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      const response = await api.post('/likes/create', likeAPIBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${loginToken}`,
        },
      });
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
