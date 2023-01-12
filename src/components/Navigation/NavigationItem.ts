import { navigationItem } from '@/types';
import {
  ALARM_PAGE,
  CREATE_REVIVEW_PAGE,
  HOME_PAGE,
  MY_PAGE,
  SEARCH_PAGE,
} from '@/utils/constants';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineHeart,
  AiFillHome,
  AiFillHeart,
} from 'react-icons/ai';
import { FaRegUser, FaUser, FaSearch } from 'react-icons/fa';

const BottomNavigationItem: navigationItem[] = [
  {
    title: 'Home',
    link: HOME_PAGE,
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    title: 'Search',
    link: SEARCH_PAGE,
    icon: AiOutlineSearch,
    activeIcon: FaSearch,
  },
  {
    title: 'CreateReview',
    link: CREATE_REVIVEW_PAGE,
    icon: AiOutlinePlus,
    activeIcon: AiOutlinePlus,
  },
  {
    title: 'Alarm',
    link: ALARM_PAGE,
    icon: AiOutlineHeart,
    activeIcon: AiFillHeart,
  },
  {
    title: 'MyPage',
    link: MY_PAGE,
    icon: FaRegUser,
    activeIcon: FaUser,
  },
];

const SideNavigationItem: navigationItem[] = [
  {
    title: '홈',
    link: HOME_PAGE,
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    title: '검색',
    link: SEARCH_PAGE,
    icon: AiOutlineSearch,
    activeIcon: FaSearch,
  },
  {
    title: '알림',
    link: ALARM_PAGE,
    icon: AiOutlineHeart,
    activeIcon: AiFillHeart,
  },
  {
    title: '만들기',
    link: CREATE_REVIVEW_PAGE,
    icon: AiOutlinePlus,
    activeIcon: AiOutlinePlus,
  },
  {
    title: '내 정보',
    link: MY_PAGE,
    icon: FaRegUser,
    activeIcon: FaUser,
  },
];

export { BottomNavigationItem, SideNavigationItem };
