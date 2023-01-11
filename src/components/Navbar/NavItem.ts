import { navbarItem } from '@/types';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineHeart,
  AiFillHome,
  AiFillHeart,
} from 'react-icons/ai';
import { FaRegUser, FaUser, FaSearch } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const BottomNavItem: navbarItem[] = [
  {
    title: 'Home',
    link: '/',
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    title: 'Search',
    link: '/search',
    icon: AiOutlineSearch,
    activeIcon: FaSearch,
  },
  {
    title: 'CreateReview',
    link: '/create',
    icon: AiOutlinePlus,
    activeIcon: AiOutlinePlus,
  },
  {
    title: 'Alarm',
    link: '/alarm',
    icon: AiOutlineHeart,
    activeIcon: AiFillHeart,
  },
  {
    title: 'MyPage',
    link: '/mypage',
    icon: FaRegUser,
    activeIcon: FaUser,
  },
];

const SideNavItem: navbarItem[] = [
  {
    title: '홈',
    link: '/',
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    title: '검색',
    link: '/search',
    icon: AiOutlineSearch,
    activeIcon: FaSearch,
  },
  {
    title: '알림',
    link: '/alarm',
    icon: AiOutlineHeart,
    activeIcon: AiFillHeart,
  },
  {
    title: '만들기',
    link: '/create',
    icon: AiOutlinePlus,
    activeIcon: AiOutlinePlus,
  },
  {
    title: '내 정보',
    link: '/mypage',
    icon: FaRegUser,
    activeIcon: FaUser,
  },
  {
    title: '로그아웃',
    link: '/logout',
    icon: FiLogOut,
    activeIcon: FiLogOut,
  },
];

export { BottomNavItem, SideNavItem };
