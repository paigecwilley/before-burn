import React from 'react';

import SideBySide from '../SideBySide';
import TripleGrid from '../TripleGrid';
import CategoryName from '../CategoryName';

import CategoryWrapper from '../../identity/wrappers/category';


const Category = () => (
  <CategoryWrapper>
    <CategoryWrapper>
      <CategoryName />
      <SideBySide />
    </CategoryWrapper>
    <CategoryWrapper>
      <TripleGrid />
    </CategoryWrapper>
  </CategoryWrapper>
);

export default Category;
