export type ExtractedReviewPosterType = {
  _id?: string;
  id: string;
  title: string;
  image: string;
};

export type ReviewPosterDataType = {
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
