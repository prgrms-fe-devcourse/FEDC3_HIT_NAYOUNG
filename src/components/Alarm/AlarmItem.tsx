import { AlarmItemType, Post } from '@/types';
import { Link } from 'react-router-dom';

// 동일한 UI인데..참조할 곳만 다름(알림타입에 따라) -> 공통 인터페이스 가지는 UI구현(AlarmItemUI)
const AlarmItem = ({ alarmItem }: { alarmItem: AlarmItemType }) => {
  return (
    <>
      {alarmItem.like ? (
        <AlarmItemUI
          imageUrl={alarmItem.like.post.image}
          title={`${alarmItem.author.fullName}님이 회원님의 게시물을 좋아합니다`}
          contents={alarmItem.like.post.title}
          post={alarmItem.like.post}
        />
      ) : alarmItem.comment ? (
        <AlarmItemUI
          imageUrl={alarmItem.comment.post.image}
          title={`${alarmItem.author.fullName}님이 회원님의 게시물에 댓글을 남겼습니다`}
          contents={alarmItem.comment.comment}
          post={alarmItem.comment.post}
        />
      ) : null}
    </>
  );
};

const AlarmItemUI = ({
  imageUrl,
  title,
  contents,
  post,
}: {
  imageUrl: string;
  title: string;
  contents: string;
  post: Post;
}) => {
  // FIXME: Link url, channelId로 channelName 받아와서 대체해야함(현재 시계로 고정해둠)
  // TODO: 좋아요한 곳에는 어떤 문구를 보여주는 게 좋을지?

  return (
    <Link to={`/category/시계/detail`} state={{ id: post._id }}>
      <div className="flex px-2 py-2 items-center justify-center">
        <img src={imageUrl} alt="리뷰이미지" className="mr-2 w-16 h-16 rounded" />
        <div className="flex-1 truncate">
          <div className="text-TEXT_BASE_BLACK text-base">{title}</div>
          <span className="text-TEXT_SUB_GRAY text-sm">{contents}</span>
        </div>
      </div>
    </Link>
  );
};

export default AlarmItem;
