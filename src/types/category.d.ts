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
