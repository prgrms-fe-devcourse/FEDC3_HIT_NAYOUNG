import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { UseFormRegister, RegisterOptions, FieldError, Path } from 'react-hook-form';

export type User = {
  posts: UserPost[];
  likes: Like[];
  comments: string[];
  following: FollowProps[];
  followers: FollowProps[];
  image: string;
  fullName: string;
  username: string;
  _id: string;
  email: string;
  coverImage: string; // 커버 이미지
  role: string;
  isOnline: boolean;
  notifications: AlarmItemType[];
  createdAt: string;
  updatedAt: string;
};

// - 게시글 모델
type Post = {
  likes: Like[];
  comments: CommentType[];
  _id: string;
  image: Optional<string>;
  imagePublicId: Optional<string>;
  title: string;
  author: User;
  createdAt: string;
  updatedAt: string;
};

export type ReviewPost = {
  // 명재오빠(리뷰페이지 리스트)
  channel: Category;
} & Post;

export type UserPost = {
  // 건오오빠(프로필)
  channel: string;
} & Post;

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
export type CategoryType = {
  name: CategoryName;
  id: string;
};

// - 채널(카테고리) 모델
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

// React-hook-forms
export type RegisterType<FormValues> = {
  register: UseFormRegister<FormValues>;
  registerName: Path<FormValues>;
  registerRules?: RegisterOptions;
  errors?: FieldError;
};

export type FormInputProps<FormValues> = RegisterType<FormValues> &
  InputHTMLAttributes<HTMLInputElement> & {
    style?: {
      container?: string;
      input?: string;
      errors?: string;
    };
    id?: string;
  };

export type FormTextareaProps<FormValues> = RegisterType<FormValues> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    style?: {
      container?: string;
      textarea?: string;
      errors?: string;
    };
  };

export type ReviewFormData = {
  title: string;
  contents: string;
  image: string;
  category: CategoryName;
};

export type ReviewPosterType = {
  _id?: string;
  id: string;
  title: string;
  image: string;
  author: User;
};

// 리뷰 게시글 상세페이지 타입
export type ReviewContentType = {
  title: string;
  image: string;
};

// 리뷰 게시글 댓글 타입
export type CommentType = {
  author: author;
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

// 알림 타입
type AlarmItemType = {
  seen: boolean;
  _id: string;
  author: User;
  user: User;
  post: string;
  like?: {
    _id: string;
    post: UserPost;
  };
  comment?: {
    _id: string;
    comment: string;
    post: UserPost;
  };
  follow?: {
    _id: string;
    user: string;
  };
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

export type FollowProps = {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
};
