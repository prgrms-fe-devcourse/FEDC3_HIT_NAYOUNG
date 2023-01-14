export type navigationName = '홈' | '검색' | '알림' | '만들기' | '내 정보' | '로그아웃';
export type navigationNameAndIcon = Record<navigationName, ReactElement>;

export type navigationItem = {
  title: string;
  link: string;
  icon: IconType;
  activeIcon: IconType;
};

export type CategoryName = '노트북' | '키보드' | '휴대폰' | '모니터' | '오디오' | '시계';

export type CategoryNameAndIcon = Record<categoryName, IconType>;

export type Category = {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: CategoryName;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Post = {
  likes: Like[],
  comments: Comment[],
  _id: string,
  image: Optional<string>,
  imagePublicId: Optional<string>,
  title: string,
  channel: Channel,
  author: User,
  createdAt:string,
  updatedAt: string
}