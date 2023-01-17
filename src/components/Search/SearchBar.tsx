import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldValues,
  FieldErrors,
  UseFormResetField,
} from 'react-hook-form';
import { MdCancel as CancelIcon } from 'react-icons/md';

import Input from '@/components/common/Input';

import api from '@/Api/api';

type SearchFormData = {
  searchWord: string;
};

type SearchBarProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  resetFormData: UseFormResetField<T>;
};

const SearchBar = ({
  register,
  errors,
  handleSubmit,
  resetFormData,
}: SearchBarProps<SearchFormData>) => {
  const submitSearchBarHandler: SubmitHandler<SearchFormData> = async ({
    searchWord,
  }) => {
    const result = await api.get(`/search/all/${searchWord}`);
    resetFormData('searchWord');
    console.log(result.data);
  };

  const onClearFormData = () => {
    resetFormData('searchWord');
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(submitSearchBarHandler)}>
        <label className="relative">
          <Input
            type="text"
            placeholder="검색어를 입력하세요."
            style={{
              container: '',
              input: 'block w-full h-10 rounded-3xl p-5 outline-0 bg-GRAY_100',
            }}
            register={register}
            registerName="searchWord"
            errors={errors.searchWord}
          />
          <button
            type="button"
            className="absolute top-1/2 right-5 transform -translate-y-1/2"
            onClick={onClearFormData}
          >
            <CancelIcon className="text-xl" />
          </button>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
