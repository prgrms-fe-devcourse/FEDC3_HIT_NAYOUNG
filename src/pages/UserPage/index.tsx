import { InformLogOutModal } from '@/components/Modal';
import UserProfile from '@/components/Profile/UserProfile';

const UserPage = () => {
  return (
    <div>
      <UserProfile />
      <InformLogOutModal />
    </div>
  );
};

export default UserPage;
