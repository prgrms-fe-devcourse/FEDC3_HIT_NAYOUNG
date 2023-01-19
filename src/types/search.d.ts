import { UserPost } from '.';

export type ExtractPostDataType = Pick<
  UserPost,
  'likes' | 'comments' | 'channel' | '_id' | 'image'
> & {
  type?: 'post';
};
export type ExtractUserDataType = Pick<User, 'posts' | 'followers' | '_id' | 'image'> & {
  type?: 'user';
};

export type ConditionalSearchedData<T> = T extends 'post'
  ? ExtractPostDataType[]
  : ExtractUserDataType[];
