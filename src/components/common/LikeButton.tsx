import api from '@/Api/api';
import { likePropState } from '@/store/store';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';

// pull 하고 지울것
const getUserInformation = async () => {
  try {
    const token = localStorage.getItem('login-token');
    if (token === null) {
      return false;
    }
    const response = await api.get(`/auth-user`, {
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const LikeButton = () => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [userId, setUserId] = useState();
  const likeState = useRecoilValue(likePropState);

  const loginToken = localStorage.getItem('login-token');

  let timer: any = null;

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserInformation();
      setUserId(user._id);
    };
    likeState?.likes.forEach((like) => {
      if (like.user === userId) {
        return setLikeId(like._id);
      }
    });

    getUser();
    checkedUserLiked();
  }, [userId]);

  const likeAPIBody = {
    postId: likeState?.id,
  };

  const checkedUserLiked = () => {
    if (!userId) return;
    likeState &&
      likeState.likes.forEach((like) => {
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
      console.log('좋아요 취소');
      try {
        const response = await api.delete('/likes/delete', {
          data: {
            id: likeId,
          },
          headers: {
            Authorization: `bearer ${loginToken}`,
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('좋아요');
      const response = await api.post('/likes/create', likeAPIBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${loginToken}`,
        },
      });
      console.log(response);
    }

    setLikeToggle(!likeToggle);
  };

  return (
    <div>
      <button onClick={onToggleLikeButton}>
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
