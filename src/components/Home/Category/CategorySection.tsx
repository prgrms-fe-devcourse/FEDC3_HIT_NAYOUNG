import { Category } from '@/types/category';

import CategoryItem from '@/components/Home/Category/CategoryItem';

type CategorySectionPropsType = {
  category: Category[];
  titleStyle: string;
};

const CategorySection = ({ category, titleStyle }: CategorySectionPropsType) => {
  return (
    <div>
      <h2 className={titleStyle}>카테고리</h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-6.5">
        {category &&
          category.map((category) => <CategoryItem key={category._id} {...category} />)}
      </div>
    </div>
  );
};

export default CategorySection;
