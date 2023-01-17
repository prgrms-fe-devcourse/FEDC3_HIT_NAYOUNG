import { navigationItem } from '@/types';
import {
  ALARM_PAGE,
  CREATE_REVIEW_PAGE,
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
    id: '1',
    title: 'Home',
    link: HOME_PAGE,
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    id: '2',
    title: 'Search',
    link: SEARCH_PAGE,
    icon: AiOutlineSearch,
    activeIcon: FaSearch,
  },
  {
    id: '3',
    title: 'CreateReview',
    link: CREATE_REVIEW_PAGE,
    icon: AiOutlinePlus,
    activeIcon: AiOutlinePlus,
  },
  {
    id: '4',
    title: 'Alarm',
    link: ALARM_PAGE,
    icon: AiOutlineHeart,
    activeIcon: AiFillHeart,
  },
  {
    id: '5',
    title: 'MyPage',
    link: MY_PAGE,
    icon: FaRegUser,
    activeIcon: FaUser,
  },
];

const SideNavigationItem: navigationItem[] = [
  {
    id: '1',
    title: '홈',
    link: HOME_PAGE,
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    id: '2',
    title: '검색',
    link: SEARCH_PAGE,
    icon: AiOutlineSearch,
    activeIcon: FaSearch,
  },
  {
    id: '3',
    title: '알림',
    link: ALARM_PAGE,
    icon: AiOutlineHeart,
    activeIcon: AiFillHeart,
  },
  {
    id: '4',
    title: '만들기',
    link: CREATE_REVIEW_PAGE,
    icon: AiOutlinePlus,
    activeIcon: AiOutlinePlus,
  },
  {
    id: '5',
    title: '내 정보',
    link: MY_PAGE,
    icon: FaRegUser,
    activeIcon: FaUser,
  },
];

export { BottomNavigationItem, SideNavigationItem };
