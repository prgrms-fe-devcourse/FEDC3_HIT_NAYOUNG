import styled from '@emotion/styled';
import { FaComment } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

type FeedItemPropsType = {
  firstFeedInformationCount: number;
  lastFeedInformationCount: number;
} & React.PropsWithChildren;

const Figure = styled.figure`
  figcaption {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    opacity: 0;
    transition: 0.3 ease-out;
    &:hover {
      opacity: 1;
    }
  }
`;

const FeedItem = ({
  firstFeedInformationCount,
  lastFeedInformationCount,
  children,
}: FeedItemPropsType) => {
  return (
    <Figure className="w-100% h-40">
      {children}
      <figcaption className="flex w-full h-full items-center justify-around">
        <div className="flex gap-2 items-center">
          <AiFillHeart />
          {firstFeedInformationCount}
        </div>
        <div className="flex gap-2 items-center">
          <FaComment /> {lastFeedInformationCount}
        </div>
      </figcaption>
    </Figure>
  );
};

export default FeedItem;
