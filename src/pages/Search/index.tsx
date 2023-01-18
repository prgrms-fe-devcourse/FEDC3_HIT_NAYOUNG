import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import SearchBar from '@/components/Search/SearchBar';
import SearchTab from '@/components/Search/SearchTab';
import { SearchState } from '@/store/recoilSearchState';

import api from '@/Api/api';

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
  const [searchedInformation, setSearchedInformation] = useState<any[]>([]);
  const searchType = useRecoilValue(SearchState);

  const onSubmitSearchBar = async ({ searchWord }: SearchFormData) => {
    const { data } = await api.get(`search/${searchType}/${searchWord}`);

    console.log(data);
    setSearchedInformation([...data]);
    resetField('searchWord');
  };

  return (
    <div className="h-full pt-10 bg-white">
      <SearchBar
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmitSearchBar={onSubmitSearchBar}
      />
      <SearchTab />
    </div>
  );
};

export default Search;
