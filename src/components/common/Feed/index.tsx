import { Link } from 'react-router-dom';

import FeedItem from './FeedItem';

type FeedPropsType = {
  categoryName: string;
  _id: string;
  image: string;
  firstFeedInformationCount: number;
  lastFeedInformationCount: number;
};

const Feed = ({
  categoryName,
  _id,
  image,
  firstFeedInformationCount,
  lastFeedInformationCount,
}: FeedPropsType) => {
  return (
    <Link
      className="border-HOVER cursor-pointer relative overflow-hidden w-1/3 h-10/12"
      to={categoryName}
      state={{ id: _id }}
    >
      {image ? (
        <FeedItem
          firstFeedInformationCount={firstFeedInformationCount}
          lastFeedInformationCount={lastFeedInformationCount}
        >
          <img className="object-cover object-center w-full h-full" src={image} />
        </FeedItem>
      ) : (
        <FeedItem
          firstFeedInformationCount={firstFeedInformationCount}
          lastFeedInformationCount={lastFeedInformationCount}
        >
          <img
            className="object-cover"
            src="https://cdn-icons-png.flaticon.com/512/261/261283.png"
          />
        </FeedItem>
      )}
    </Link>
  );
};

export default Feed;
