import { formatDate } from '@/utils/format';
import { BsTrash } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';

type ContentHandlerPropType = {
  author: {
    fullName: string;
    image: string;
  };
  createdAt: string;
};

// TODO: 수정, 삭제, 유저 따로 빼둘지 말지 보류 @chunwookJoo
const ContentHandler = ({ author, createdAt }: ContentHandlerPropType) => {
  return (
    <div className="flex items-center justify-between mb-8 text-TEXT_SUB_GRAY">
      <div className="avatar items-center gap-2">
        <div className={`rounded-full`}>
          <img
            className="max-w-[36px]"
            src={author.image ? author.image : 'https://placeimg.com/200/200/arch'}
          />
        </div>
        <span>{author.fullName}</span>
      </div>
      <div className="flex items-center gap-2 text-TEXT_BASE_BLACK">
        <span>{formatDate(createdAt)}</span>
        <span className="hover:cursor-pointer tooltip tooltip-bottom" data-tip="글 수정">
          <FaRegEdit className="text-xl" />
        </span>
        <span className="hover:cursor-pointer tooltip tooltip-bottom" data-tip="글 삭제">
          <BsTrash className="text-xl" />
        </span>
      </div>
    </div>
  );
};

export default ContentHandler;
