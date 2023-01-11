import { categoryItem } from '@/types';
import CategoryItem from '@/components/Home/Category/CategoryItem';

// dummy
const dummy: categoryItem[] = [
  {
    authRequired: false,
    posts: [
      '63bd07f093836272216d31db',
      '63bd083b93836272216d31e5',
      '63bd084293836272216d31ec',
      '63bd084993836272216d31f3',
      '63bd084e93836272216d31fa',
      '63bd151693836272216d3256',
    ],
    _id: '63bd045193836272216d31bc',
    name: '노트북',
    description: 'test 채널',
    createdAt: '2023-01-10T06:23:13.411Z',
    updatedAt: '2023-01-10T07:34:46.044Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '63bd140193836272216d323e',
    name: '키보드',
    description: '키보드',
    createdAt: '2023-01-10T07:30:09.908Z',
    updatedAt: '2023-01-10T07:30:09.908Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '63bd140b93836272216d3242',
    name: '휴대폰',
    description: '휴대폰',
    createdAt: '2023-01-10T07:30:19.346Z',
    updatedAt: '2023-01-10T07:30:19.346Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '63bd141693836272216d3246',
    name: '모니터',
    description: '모니터',
    createdAt: '2023-01-10T07:30:30.579Z',
    updatedAt: '2023-01-10T07:30:30.579Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '63bd141d93836272216d324a',
    name: '오디오',
    description: '오디오',
    createdAt: '2023-01-10T07:30:37.369Z',
    updatedAt: '2023-01-10T07:30:37.369Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '63bd143493836272216d324e',
    name: '시계',
    description: '시계',
    createdAt: '2023-01-10T07:31:00.706Z',
    updatedAt: '2023-01-10T07:31:00.706Z',
    __v: 0,
  },
];

const CategoryList = () => {
  // TODO: get channel api
  return (
    <div className="flex flex-wrap">
      {dummy.map((category) => (
        <CategoryItem key={category._id} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
