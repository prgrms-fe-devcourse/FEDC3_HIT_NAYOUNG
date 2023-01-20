import { ExtractUserDataType } from '@/types/search';

import Feed from '@/components/common/Feed';

import { USER_PAGE } from '@/utils/constants';

const SearchUserFeed = ({ searchedUser }: { searchedUser: ExtractUserDataType[] }) => {
  const UserFeedComponent = searchedUser.map((aSearchedUser) => {
    const { posts, followers, image, _id } = aSearchedUser;

    return (
      <Feed
        categoryName={USER_PAGE}
        image={image}
        _id={_id}
        firstFeedInformationCount={posts.length}
        lastFeedInformationCount={followers.length}
        key={aSearchedUser._id}
      />
    );
  });

  return <section className="flex flex-wrap pt-1 bg-white">{UserFeedComponent}</section>;
};

export default SearchUserFeed;
