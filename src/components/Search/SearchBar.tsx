import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { MdCancel as CancelIcon } from 'react-icons/md';

import Input from '@/components/common/Input';

type SearchFormData = {
  searchWord: string;
};

type SearchBarProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmitSearchBar: ({ searchWord }: SearchFormData) => Promise<void>;
};

const SearchBar = ({
  register,
  errors,
  handleSubmit,
  onSubmitSearchBar,
}: SearchBarProps<SearchFormData>) => {
  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmitSearchBar)}>
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
          >
            <CancelIcon className="text-xl" />
          </button>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
