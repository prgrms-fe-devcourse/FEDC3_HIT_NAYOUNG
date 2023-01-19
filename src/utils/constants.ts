import { CategoryName } from '@/types';

// router
export const HOME_PAGE = '/';
export const LOGIN_PAGE = '/login';
export const SIGNUP_PAGE = '/signup';
export const SEARCH_PAGE = '/search';
export const ALARM_PAGE = '/alarm';
export const MY_PAGE = '/my-page';
export const USER_PAGE = '/user-page';
export const EDIT_MY_PAGE = '/edit-my-page';
export const CREATE_REVIEW_PAGE = '/create-review';
export const UPDATE_REVIEW_PAGE = '/update-review';
export const REVIEW_LIST_PAGE = '/category/:category';
export const REVIEW_DETAIL_PAGE = '/category/:category/detail';
export const NOT_FOUND_PAGE = '*';

// viewport
export const MOBILE_SCREEN = '768px';
export const TABLET_SCREEN = '1024px';
export const DESKTOP_SCREEN = '1280px';

// image size
export const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB

// notification Type
export const COMMENT = 'COMMENT';
export const FOLLOW = 'FOLLOW';
export const LIKE = 'LIKE';
export const MESSAGE = 'MESSAGE';

// 상수 객체
export const VALID_CATEGORY_NAME = [
  '노트북',
  '모니터',
  '시계',
  '오디오',
  '키보드',
  '휴대폰',
] as CategoryName[];

// local storage key
export const CATEGORY_ID_NAME = 'category-id-name';
export const LOGIN_TOKEN = 'login-token';
