import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  FieldError,
} from 'react-hook-form';

export type navigationName = '홈' | '검색' | '알림' | '만들기' | '내 정보' | '로그아웃';
export type navigationNameAndIcon = Record<navigationName, ReactElement>;
export type navigationItem = {
  id: string;
  title: string;
  link: string;
  icon: IconType;
  activeIcon: IconType;
};

// 카테고리 타입
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

export type CategoryType = {
  name: CategoryName;
  id: string;
};

export type Post = {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image: Optional<string>;
  imagePublicId: Optional<string>;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
};
// React-hook-forms
export type RegisterType<RegisterData extends FieldValues> = {
  register: UseFormRegister<RegisterData>;
  registerName: keyof RegisterData;
  registerRules?: RegisterOptions;
  errors?: FieldError;
};

export type RegisterInputProps<RegisterData> = {
  type: string;
  placeholder?: string;
  style?: {
    container?: string;
    input?: string;
  };
  value?: string;
  accept?: string;
  id?: string;
} & RegisterType<RegisterData>;

export type RegisterTextareaProps<RegisterData> = {
  rows: number;
  placeholder: string;
  style?: {
    container?: string;
    textarea?: string;
  };
} & RegisterType<RegisterData>;

export type ReviewFormData = {
  title: string;
  contents: string;
  image: string;
  category: CategoryName;
};

// 타입 별칭 이름을 ReviewPoster로 작성하면 error가 발생하는 이유를 모르겠습니다.
export type ReviewPosterType = {
  _id?: string;
  id: string;
  title: string;
  image: string;
};

// 리뷰 게시글 상세페이지 타입
export type ReviewContentType = {
  title: string;
  image: string;
};

// 리뷰 게시글 댓글 타입
export type CommentType = {
  author: {
    fullName: string;
    _id: string;
  };
  comment: string;
  createdAt: string;
  post: string;
  updatedAt: string;
  __v: string;
  _id: string;
};

// 좋아요 응답 타입
export type Like = {
  createdAt: string;
  post: string;
  updatedAt: string;
  user: string;
  __v: string;
  _id: string;
};

// 좋아요 Prop 타입
export type LikeProps = {
  id: string;
  likes: Like[];
};

// BreadCrumb, ReviewHandler에서 사용
export type ReviewContentProps = {
  userId: string;
  author: {
    _id: string;
    fullName: string;
    image: string;
  };
  title: string;
  image: string;
  createdAt: string;
  channel: {
    name: string;
    _id: string;
  };
};
