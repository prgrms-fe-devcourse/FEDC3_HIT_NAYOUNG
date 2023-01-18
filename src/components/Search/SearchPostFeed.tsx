import { ExtractPostDataType } from '@/types/search';

import Feed from '@/components/common/Feed';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/store/recoilCategoryState';
import { DEFAULT_CATEGORY_INFORMATION } from '@/utils/constants';

const SearchFeedSection = ({ searchedPost }: { searchedPost: ExtractPostDataType[] }) => {
  const categoryNameAndIdList = useRecoilValue(categoryState);
  const AddPropsFeedComponent = searchedPost.map((aSearchedPost) => {
    const { channel, likes, comments, image, _id } = aSearchedPost;
    const { name } =
      categoryNameAndIdList.find(({ id }) => id === channel) ??
      DEFAULT_CATEGORY_INFORMATION;

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

  return (
    <section className="flex flex-wrap pt-1 bg-white">{AddPropsFeedComponent}</section>
  );
};

export default SearchFeedSection;
