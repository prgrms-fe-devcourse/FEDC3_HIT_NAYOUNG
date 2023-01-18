import { useForm } from 'react-hook-form';

import SearchBar from '@/components/Search/SearchBar';

import api from '@/Api/api';
import { useState } from 'react';

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
  const [search, setSearch] = useState<any[]>([]);

  const onSubmitSearchBar = async ({ searchWord }: SearchFormData) => {
    const { data } = await api.get(`search/all/${searchWord}`);

    setSearch([...data]);

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
    </div>
  );
};

export default Search;
