import { ExtractPostDataType } from '@/types/search';

import { getCategoryNameToMatchingId } from '@/utils/category';

import Feed from '@/components/common/Feed';

const SearchFeedSection = ({ searchedPost }: { searchedPost: ExtractPostDataType[] }) => {
  const PostFeedComponent = searchedPost.map((aSearchedPost) => {
    const { channel, likes, comments, image, _id } = aSearchedPost;
    const name = getCategoryNameToMatchingId(channel);

    return (
      <Feed
        categoryName={`/category/${name}/detail`}
        image={image}
        _id={_id}
        firstFeedInformationCount={likes.length}
        lastFeedInformationCount={comments.length}
        key={aSearchedPost._id}
      />
    );
  });

  return <section className="flex flex-wrap pt-1 bg-white">{PostFeedComponent}</section>;
};

export default SearchFeedSection;
