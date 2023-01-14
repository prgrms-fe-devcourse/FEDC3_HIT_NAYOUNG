import { Category, CategoryName } from '@/types';
import CategoryItem from '@/components/Home/Category/CategoryItem';
import { useEffect, useState } from 'react';
import api from '@/Api/api';

const CategoryList = ({ category }: { category: Category[] }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-6.5">
        {category &&
          category.map((category) => <CategoryItem key={category._id} {...category} />)}
      </div>
    </div>
  );
};

export default CategoryList;
