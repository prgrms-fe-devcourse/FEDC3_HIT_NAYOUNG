import { BottomNavigationItem } from './NavigationItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { checkAuthUser } from '@/Api/user';
import { useSetRecoilState } from 'recoil';
import { informLoginModalState } from '@/store/store';

const BottomNavigation = () => {
  const setLogInModalOpened = useSetRecoilState(informLoginModalState);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onOpenLogInModal = (link: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    (async () => {
      const isLogIn = await checkAuthUser();
      if (!isLogIn) {
        setLogInModalOpened(true);
      } else {
        navigate(link);
      }
    })();
  };

  return (
    <div className="fixed z-[100] md:hidden bottom-0 py-2 max-w-3xl w-full flex justify-around align-middle border-t-2 border-GRAY_100 bg-white">
      {BottomNavigationItem.map((item, index) => {
        if (index < 2) {
          return (
            <Link key={index} to={item.link} className="flex-1 text-center py-2 px-4">
              {pathname === item.link ? (
                <item.activeIcon style={{ display: 'inline-flex' }} />
              ) : (
                <item.icon style={{ display: 'inline-flex' }} />
              )}
            </Link>
          );
        } else {
          return (
            <Link
              key={index}
              onClick={(e) => {
                onOpenLogInModal(item.link, e);
              }}
              to={item.link}
              className={
                index === 2
                  ? 'bg-HOVER flex-1 flex flex-col justify-center items-center px-6 rounded-3xl'
                  : 'flex-1 text-center py-2 px-4'
              }
            >
              {pathname === item.link ? (
                <item.activeIcon
                  style={{
                    display: 'inline-flex',
                    color: `${index === 2 ? '#FFFFFF' : ''}`,
                  }}
                />
              ) : (
                <item.icon
                  style={{
                    display: 'inline-flex',
                    color: `${index === 2 ? '#FFFFFF' : ''}`,
                  }}
                />
              )}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default BottomNavigation;
