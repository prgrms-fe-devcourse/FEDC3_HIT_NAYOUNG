import { FollowProps, User } from '@/types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFollowUser, getUnfollowUser } from '@/Api/follow';
import { getUserId, getOpponentUserId } from '@/Api/user';
import { FOLLOW, MY_PAGE } from '@/utils/constants';
import Avatar from '../common/Avatar';
import ReviewAndFollow from './ReviewAndFollow';
import ReviewList from './ReviewList';
import { callCreateAlarmAPI } from '@/Api/notification';
import Button from '../ReviewCreateForm/Button';
import { toast } from 'react-toastify';
import { MESSAGE_FAIL } from '../Toast/ToastText';

const UserProfile = () => {
  // const [user, setUser] = useRecoilState<User>(userState);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isFollow, setIsFollow] = useState(false);

  const onClickFollowButton = async () => {
    const opponentUser = await getOpponentUserId(state.id);
    const followData = await getFollowUser(opponentUser._id);

    const AlarmAPIBody = {
      notificationType: FOLLOW,
      notificationTypeId: followData._id,
      userId: opponentUser._id,
      postId: null,
    };
    await callCreateAlarmAPI(AlarmAPIBody);
    await opponentUserIdData();
  };

  // 추후 모달창 리팩토링
  // const setUnfollowModalOpened = useSetRecoilState(informUnfollowModalState);

  const onClickUnFollowButton = async () => {
    if (confirm('팔로우를 취소하시겠습니까?')) {
      const { followers } = await getOpponentUserId(state.id);
      const { _id } = await getUserId();
      const followData = followers.filter(
        (follower: FollowProps) => follower.follower === _id
      );
      await getUnfollowUser(followData[0]._id);
      await opponentUserIdData();
    } else {
      return;
    }
  };

  const opponentUserIdData = async () => {
    const opponentUser = await getOpponentUserId(state.id);
    const loginUser = await getUserId();
    if (opponentUser._id && opponentUser._id === loginUser._id) {
      // opponentUser에 id가 없음 (유저가 없으면)
      navigate(MY_PAGE);
    }
    const followingUserIdArr = opponentUser.followers.map(
      (user: { follower: string }) => {
        return user.follower;
      }
    );
    if (followingUserIdArr.includes(loginUser._id)) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
    setUser(opponentUser);
  };

  useEffect(() => {
    opponentUserIdData();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center pt-10 text-xl">해당 사용자가 없습니다.</div>
    );
  }
  return (
    <div className="max-w-xl w-full my-0 mx-auto">
      <div className="flex flex-col items-center">
        <Avatar image={user.image} size={36} style="mt-10" />
        <div className="text-2xl mt-5">{user.fullName || '해당 사용자가 없습니다.'}</div>
        <div onClick={() => toast.warning(MESSAGE_FAIL)}>
          <button className="btn w-2/5 min-w-[300px] mt-5 bg-white text-BASE border-BASE hover:text-white hover:bg-HOVER hover:border-HOVER">
            MESSAGE
          </button>
        </div>
        <div className="flex flex-col">
          {isFollow ? (
            <Button
              name="팔로우 취소"
              style="btn w-2/5 min-w-[300px] mt-5 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
              clickHandler={onClickUnFollowButton}
            />
          ) : (
            <Button
              name="팔로우"
              style="btn w-2/5 min-w-[300px] mt-5 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
              clickHandler={onClickFollowButton}
            />
          )}
        </div>
        {/* user recoil에 넣어야할듯 */}
        <ReviewAndFollow user={user} />
        <ReviewList user={user} />
      </div>
    </div>
  );
};

export default UserProfile;
