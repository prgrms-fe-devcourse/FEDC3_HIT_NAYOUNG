import { categoryItem, categoryName } from '@/types';
import CategoryItem from '@/components/Home/Category/CategoryItem';
import { useEffect, useState } from 'react';
import api from '@/Api/api';

const validCategoryName: categoryName[] = [
  '노트북',
  '모니터',
  '시계',
  '오디오',
  '키보드',
  '휴대폰',
];

const CategoryList = () => {
  const [category, setCategory] = useState<categoryItem[]>();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = (await api.get('/channels')).data as categoryItem[];
        const validCategory = response.filter((category) =>
          validCategoryName.includes(category.name)
        );
        setCategory(validCategory);
      } catch (e) {
        console.log(e); // TODO: 에러처리..UI를 보여주는 건 어때? 새로고침하세요 모달이라던지
      }
    };

    getCategory();
  }, []);

  return (
    <div className="flex flex-wrap">
      {category &&
        category.map((category) => <CategoryItem key={category._id} {...category} />)}
    </div>
  );
};

export default CategoryList;
