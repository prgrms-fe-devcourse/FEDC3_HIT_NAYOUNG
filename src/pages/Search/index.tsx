import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { ExtractPostDataType, ExtractUserDataType } from '@/types/search';

import { SearchState } from '@/store/recoilSearchState';

import { getSearchByType } from '@/Api/search';

import SearchBar from '@/components/Search/SearchBar';
import SearchTab from '@/components/Search/SearchTab';
import SearchPostFeed from '@/components/Search/SearchPostFeed';
import SearchUserFeed from '@/components/Search/SearchUserFeed';
import { InformLoginModal, InformLogOutModal } from '@/components/Modal';

type SearchFormData = {
  searchWord: string;
};

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<SearchFormData>();
  const [searchedPost, setSearchedPost] = useState<ExtractPostDataType[]>();
  const [searchedUser, setSearchedUser] = useState<ExtractUserDataType[]>();
  const searchType = useRecoilValue(SearchState);

  const onSubmitSearchBar = async ({ searchWord }: SearchFormData) => {
    try {
      if (searchType === 'post') {
        const result = await getSearchByType<'post'>('all', searchWord);
        const extractPostInformation = result.filter((piece) => 'channel' in piece);

        setSearchedPost([...extractPostInformation]);
        setSearchedUser([]);
      }

      if (searchType === 'user') {
        const result = await getSearchByType<'user'>('users', searchWord);
        const extractPostInformation = result.filter((piece) => 'posts' in piece);

        setSearchedUser([...extractPostInformation]);
        setSearchedPost([]);
      }

      resetField('searchWord');
    } catch (error) {
      console.error(error);
    }
  };

  const onRemoveSearchWord = useCallback(() => {
    resetField('searchWord');
  }, []);

  const SearchFeedSection = () => {
    if (searchedPost && searchedPost.length) {
      return <SearchPostFeed searchedPost={searchedPost} />;
    }

    if (searchedUser && searchedUser.length) {
      return <SearchUserFeed searchedUser={searchedUser} />;
    }

    return null;
  };

  return (
    <div className="h-full pt-10 bg-white  md:mx-16 lg:mx-20">
      <SearchBar
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmitSearchBar={onSubmitSearchBar}
        removeSearchWordHandler={onRemoveSearchWord}
      />
      <SearchTab />
      <SearchFeedSection />
      <InformLoginModal />
      <InformLogOutModal />
    </div>
  );
};

export default Search;
