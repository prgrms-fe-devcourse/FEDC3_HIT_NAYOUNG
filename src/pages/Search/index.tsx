import { useForm } from 'react-hook-form';

import SearchBar from '@/components/Search/SearchBar';

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

  return (
    <div className="h-full pt-10 bg-white">
      <SearchBar
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        resetFormData={resetField}
      />
    </div>
  );
};

export default Search;
