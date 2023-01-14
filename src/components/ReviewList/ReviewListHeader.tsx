import useResize from '@/hooks/common/useResize';
import { MOBILE_SCREEN } from '@/utils/constants';
import styled from '@emotion/styled';

const StyledH1 = styled.h1`
  // @emotion으로 UI를 만드는 경우가 있으니 constants.ts에 자주 사용하는 color 넣어야하지 않을까요?
  color: #261204;
  font-weight: bold;
  font-size: 1.5rem;
  padding-top: 3rem;

  @media (max-width: ${MOBILE_SCREEN}) {
    border: 1px solid #ffc7c7;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 0.7rem 1.25rem;
  }
`;

// className = 'border border-BASE text-TEXT_BASE_BLACK text-base font-bold py-2.5 px-5 rounded-2xl';
const ReviewListHeader = ({ categoryName }: { categoryName: string }) => {
  const { width } = useResize();

  return (
    <header className="flex lg:inline-block md:inline-block justify-center">
      <StyledH1>{`리뷰 게시글 목록 ${
        // '>' 아이콘으로 변경
        width >= parseInt(MOBILE_SCREEN) ? `> ${categoryName}` : ''
      }`}</StyledH1>
    </header>
  );
};

export default ReviewListHeader;
