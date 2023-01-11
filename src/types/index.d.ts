export type categoryName = '노트북' | '키보드' | '휴대폰' | '모니터' | '오디오' | '시계';

export type categoryNameAndIcon = Record<categoryName, ReactElement>;

export type categoryItem = {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: categoryName;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
