import { ReactElement } from 'react';

export type navigationName = '홈' | '검색' | '알림' | '만들기' | '내 정보' | '로그아웃';
export type navigationNameAndIcon = Record<navigationName, ReactElement>;

export type navigationItem = {
  title: string;
  link: string;
  icon: IconType;
  activeIcon: IconType;
};
