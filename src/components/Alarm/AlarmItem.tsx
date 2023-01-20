import Avatar from '@/components/common/Avatar';
import { AlarmItemType } from '@/types';
import { getReviewContent } from '@/utils/alarm';
import { getCategoryNameToMatchingId } from '@/utils/category';
import { Link } from 'react-router-dom';

// 유사한 UI인데 참조할 곳만 다름(알림타입에 따라) -> 공통 인터페이스 가지는 UI구현(AlarmItemUI)
const AlarmItem = ({ alarmItem }: { alarmItem: AlarmItemType }) => {
  return (
    <>
      {alarmItem.like ? (
        <AlarmItemUI
          imageUrl={alarmItem.like.post.image}
          title={`${alarmItem.author.fullName}님이 회원님의 게시물을 좋아합니다.`}
          contents={getReviewContent(alarmItem.like.post.title)}
          link={`/category/${getCategoryNameToMatchingId(
            alarmItem.like.post.channel
          )}/detail`}
          linkState={{ id: alarmItem.like.post._id }}
        />
      ) : alarmItem.comment ? (
        <AlarmItemUI
          imageUrl={alarmItem.comment.post.image}
          title={`${alarmItem.author.fullName}님이 회원님의 게시물에 댓글을 남겼습니다.`}
          contents={getReviewContent(alarmItem.comment.post.title)}
          link={`/category/${getCategoryNameToMatchingId(
            alarmItem.comment.post.channel
          )}/detail`}
          linkState={{ id: alarmItem.comment.post._id }}
        />
      ) : alarmItem.follow ? (
        <AlarmItemUI
          imageUrl={alarmItem.author.image}
          title={`${alarmItem.author.fullName}님이 회원님을 팔로우 합니다.`}
          contents={`${alarmItem.author.fullName}님을 알아보시려면 클릭하세요. 회원님의 프로필로 이동합니다`}
          link={`/user-page`}
          linkState={{ id: alarmItem.author._id }}
          avatar
        />
      ) : null}
    </>
  );
};

const AlarmItemUI = ({
  imageUrl,
  title,
  contents,
  link,
  linkState,
  avatar,
}: {
  imageUrl: string;
  title: string;
  contents: string;
  link: string;
  linkState: { id: string };
  avatar?: boolean;
}) => {
  return (
    <Link to={link} state={linkState}>
      <div className="flex px-2 py-2 items-center justify-center">
        {avatar ? (
          <Avatar image={imageUrl} size={16} style="mr-2" />
        ) : (
          <img src={imageUrl} alt="리뷰이미지" className="mr-2 w-16 h-16 rounded" />
        )}
        <div className="flex-1 truncate">
          <div className="text-TEXT_BASE_BLACK text-base">{title}</div>
          <span className="text-TEXT_SUB_GRAY text-sm">{contents}</span>
        </div>
      </div>
    </Link>
  );
};

export default AlarmItem;
