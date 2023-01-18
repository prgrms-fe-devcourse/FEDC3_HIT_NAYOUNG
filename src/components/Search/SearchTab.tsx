import React from 'react';
import { useRecoilState } from 'recoil';

import { SearchState } from '@/store/recoilSearchState';

const SearchTab = () => {
  const [searchType, setSearchType] = useRecoilState(SearchState);
  const buttonStyle = 'w-full p-2 text-TEXT_SUB_GRAY font-semibold cursor-pointer';
  const selectedButtonType = 'border-b-2 border-BUTTON_TEXT_DISABLED';

  const onClickTab = ({ currentTarget: { name } }: React.MouseEvent<HTMLButtonElement>) =>
    setSearchType(name);

  return (
    <section className="flex pt-4">
      <div className="w-1/2 text-center">
        <button
          name="all"
          className={`${buttonStyle}  ${searchType === 'all' && selectedButtonType}`}
          onClick={onClickTab}
        >
          피드 검색
        </button>
      </div>
      <div className="w-1/2 text-center">
        <button
          name="users"
          className={`${buttonStyle} ${searchType === 'users' && selectedButtonType}`}
          onClick={onClickTab}
        >
          사용자 검색
        </button>
      </div>
    </section>
  );
};

export default SearchTab;
