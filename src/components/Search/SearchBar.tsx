import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { MdCancel as CancelIcon } from 'react-icons/md';

import FormInput from '@/components/common/Input/FormInput';

type SearchFormData = {
  searchWord: string;
};

type SearchBarProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmitSearchBar: ({ searchWord }: SearchFormData) => Promise<void>;
  removeSearchWordHandler: () => void;
};

const SearchBar = ({
  register,
  errors,
  handleSubmit,
  onSubmitSearchBar,
  removeSearchWordHandler,
}: SearchBarProps<SearchFormData>) => {
  return (
    <section className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmitSearchBar)}>
        <label className="relative">
          <FormInput<SearchFormData>
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
            onClick={removeSearchWordHandler}
          >
            <CancelIcon className="text-xl" />
          </button>
        </label>
      </form>
    </section>
  );
};

export default SearchBar;
