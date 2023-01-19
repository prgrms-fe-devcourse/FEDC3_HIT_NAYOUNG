import { InformLogOutModal } from '@/components/Modal';
import InformUnfollowModal from '@/components/Modal/InformUnfollowModal';
import UserProfile from '@/components/Profile/UserProfile';

const UserPage = () => {
  return (
    <div>
      <UserProfile />
      <InformLogOutModal />
      <InformUnfollowModal />
    </div>
  );
};

export default UserPage;
