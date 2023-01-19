import { getUnfollowUser } from '@/Api/follow';
import { getOpponentUserId, getUserId } from '@/Api/user';
import { getUserState, userState } from '@/store/recoilUserState';
import { informUnfollowModalState } from '@/store/store';
import { FollowProps, UserDataProps } from '@/types';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import ModalPortal from './ModalPortal';

const InformUnfollowModal = () => {
  const [open, setOpen] = useRecoilState<boolean>(informUnfollowModalState);
  const [user, setUser] = useRecoilState(userState);
  const { state } = useLocation();

  const onClickUnfollow = async () => {
    setOpen(false);
    // const opponentUser = await getOpponentUserId(state.id);
    // const { _id } = await getUserId();
    // const followData = opponentUser.followers.filter(
    //   (follower: FollowProps) => follower.follower === _id
    // );
    // await getUnfollowUser(followData[0]._id);
    // setUser({ ...opponentUser, followers: opponentUser.followers });
  };

  return (
    <ModalPortal>
      <input
        readOnly
        checked={open}
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">팔로우를 취소 하시겠습니까?</h3>
          <div className="modal-action mt-4 mb-4">
            <div
              className="btn w-full bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
              onClick={onClickUnfollow}
            >
              팔로우 취소
            </div>
          </div>
          <center>
            <label
              onClick={() => setOpen(false)}
              htmlFor="my-modal-6"
              className="text-sm hover:cursor-pointer"
            >
              팔로우 유지
            </label>
          </center>
        </div>
      </div>
    </ModalPortal>
  );
};

export default InformUnfollowModal;
