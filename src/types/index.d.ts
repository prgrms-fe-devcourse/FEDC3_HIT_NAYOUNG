import { ReactElement } from 'react';

export type navbarName = '홈' | '검색' | '알림' | '만들기' | '내 정보' | '로그아웃';
export type navbarNameAndIcon = Record<navbarName, ReactElement>;

export type navbarItem = {
  title: string;
  link: string;
  icon: IconType;
  activeIcon: IconType;
};
