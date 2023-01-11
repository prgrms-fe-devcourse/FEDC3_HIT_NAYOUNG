import React from 'react';
import { SideNavItem } from './NavItem';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.svg';

const SideNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed w-60 left-0 border-r-2 border-GRAY_200 h-full max-md:hidden max-xl:w-16">
      <div className="h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-4 border-b-2 border-GRAY_200 p-4">
          <div className="w-full py-2 px-4 max-xl:px-0">
            <img src={Logo} className="w-12 max-w-12" />
          </div>
          {SideNavItem.map((item, index) => {
            if (index < 4) {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="w-full py-2 px-4 rounded-2xl hover:bg-GRAY_100 tooltip tooltip-right"
                  data-tip={item.title}
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
                  className="w-full py-2 px-4 rounded-2xl hover:bg-[GRAY_100] tooltip tooltip-right"
                  data-tip={item.title}
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
