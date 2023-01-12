import { navigationItem } from '@/types';
import { SideNavigationItem } from './NavigationItem';
import { Link, useLocation } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Logo from './Logo.svg';

type NavigationItemProps = {
  item: navigationItem;
  index: number;
};

const onHandlerLogout = () => {
  /**
   * 로그아웃 로직 들어가면 됩니다.
   */
};

const NavigationItemComponent = (
  { item }: NavigationItemProps,
  { index }: NavigationItemProps
) => {
  const { pathname } = useLocation();

  return (
    <Link
      key={index}
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
  return (
    <div className="fixed w-60 left-0 border-r-2 border-GRAY_200 h-full max-md:hidden max-xl:w-16">
      <div className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-4 border-b-2 border-GRAY_200 p-4">
          <div className="w-full py-2 px-4 max-xl:px-0">
            <img src={Logo} className="w-12 max-w-12" />
          </div>
          {SideNavigationItem.map((item, index) => {
            if (index < 4) {
              return <NavigationItemComponent item={item} index={index} />;
            }
          })}
        </ul>
        <ul className="flex flex-col gap-4 p-4">
          {SideNavigationItem.map((item, index) => {
            if (index > 3) {
              return <NavigationItemComponent item={item} index={index} />;
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
