import { BottomNavItem } from './NavItem';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed md:hidden bottom-0 py-2 max-w-3xl w-full flex justify-around align-middle border-t-2 border-neutral-300">
      {BottomNavItem.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.link}
            className={
              index === 2
                ? 'bg-red-400 flex-1 flex flex-col justify-center items-center px-6 rounded-3xl'
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
      })}
    </div>
  );
};

export default BottomNav;