import { SideNavItem } from './NavItem';
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed max-md:hidden max-xl:w-16 w-60 left-0 border-r-2 h-full">
      <div className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-4 border-b-2 p-4">
          <div className="w-full max-xl:px-2 py-2 px-4">
            <h1>HIT</h1>
          </div>
          {SideNavItem.map((item, index) => {
            if (index < 4) {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="w-full py-2 px-4 hover:bg-slate-500"
                >
                  <li className="flex max-xl:justify-center items-center gap-2">
                    <div>
                      {pathname === item.link ? <item.activeIcon /> : <item.icon />}
                    </div>
                    <div className="max-xl:hidden">{item.title}</div>
                  </li>
                </Link>
              );
            }
          })}
        </ul>
        <ul className="flex flex-col gap-4 p-4">
          {SideNavItem.map((item, index) => {
            if (index > 3) {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="w-full py-2 px-4 hover:bg-slate-500"
                >
                  <li className="flex max-xl:justify-center items-center gap-2">
                    <div>
                      {pathname === item.link ? <item.activeIcon /> : <item.icon />}
                    </div>
                    <div className="max-xl:hidden">{item.title}</div>
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
