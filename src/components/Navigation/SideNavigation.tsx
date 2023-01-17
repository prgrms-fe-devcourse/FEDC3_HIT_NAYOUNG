import { navigationItem } from '@/types';
import { SideNavigationItem } from './NavigationItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { informLoginModalState, informLogOutModalState } from '@/store/store';
import { checkAuthUser } from '@/Api/user';
import { FiLogOut } from 'react-icons/fi';
import Logo from './Logo.svg';
import React from 'react';

type NavigationItemProps = {
  item: navigationItem;
  checkLoginModal?: boolean;
};

const NavigationItemComponent = ({
  item,
  checkLoginModal = false,
}: NavigationItemProps) => {
  const setLogInModalOpened = useSetRecoilState(informLoginModalState);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onHandlerLogInModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    (async () => {
      const isLogIn = await checkAuthUser();
      if (!isLogIn && checkLoginModal) {
        setLogInModalOpened(true);
      } else {
        navigate(item.link);
      }
    })();
  };

  return (
    <Link
      onClick={onHandlerLogInModal}
      to={item.link}
      className="w-full py-2 px-4 rounded-2xl hover:bg-GRAY_100 tooltip tooltip-right"
      data-tip={item.title}
    >
      <li className="flex max-xl:justify-center items-center gap-2">
        <div>{pathname === item.link ? <item.activeIcon /> : <item.icon />}</div>
        <div className="max-xl:hidden">{item.title}</div>
      </li>
    </Link>
  );
};

const SideNavigation = () => {
  const setLogOutModalOpened = useSetRecoilState(informLogOutModalState);

  const onHandlerLogout = () => {
    (async () => {
      const isLogIn = await checkAuthUser();
      if (isLogIn) setLogOutModalOpened(true);
    })();
  };

  return (
    <div className="fixed z-[100] w-60 left-0 border-r-2 border-GRAY_200 h-full max-md:hidden max-xl:w-16 bg-white">
      <div className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-4 border-b-2 border-GRAY_200 p-4">
          <div className="w-full py-2 px-4 max-xl:px-0">
            <img src={Logo} className="w-12 max-w-12" />
          </div>
          {SideNavigationItem.map((item, index) => {
            if (index < 2) {
              return <NavigationItemComponent item={item} key={item.id} />;
            }
          })}
          {SideNavigationItem.map((item, index) => {
            if (2 <= index && index <= 3) {
              return (
                <NavigationItemComponent
                  item={item}
                  key={item.id}
                  checkLoginModal={true}
                />
              );
            }
          })}
        </ul>
        <ul className="flex flex-col gap-4 p-4">
          {SideNavigationItem.map((item, index) => {
            if (index >= 4) {
              return (
                <NavigationItemComponent
                  item={item}
                  key={item.id}
                  checkLoginModal={true}
                />
              );
            }
          })}
          <a
            className="w-full py-2 px-4 rounded-2xl hover:cursor-pointer hover:bg-GRAY_100 tooltip tooltip-right"
            data-tip="로그아웃"
            onClick={onHandlerLogout}
          >
            <li className="flex max-xl:justify-center items-center gap-2">
              <div>
                <FiLogOut />
              </div>
              <div className="max-xl:hidden">로그아웃</div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
