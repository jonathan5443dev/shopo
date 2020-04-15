import React from 'react';

import Tag from '../../components/tag/tag';
import ProductCard from '../../components/product-card/product-card';

import * as Tags from './styles';

const tags = [
  {id: 1, name: 'T-shirts'},
  {id: 2, name: 'Crop tops'},
  {id: 3, name: 'Blouses'},
  {id: 4, name: 'Blouses 4'},
  {id: 5, name: 'Blouses 5'},
  {id: 6, name: 'Blouses 6'},
  {id: 7, name: 'Blouses 7'},
];

const products = [
  {
    name: 'Dorothy perkings',
    discountPercentage: '30',
    categoryName: 'Evening dress 1',
    previousPrice: '15',
    price: '12',
    hasDiscount: true,
  },
  {
    name: 'Dorothy perkings',
    discountPercentage: '30',
    categoryName: 'Evening dress 1',
    previousPrice: '15',
    price: '12',
    hasDiscount: true,
  },
  {
    name: 'Dorothy perkings',
    discountPercentage: '30',
    categoryName: 'Evening dress 1',
    previousPrice: '15',
    price: '12',
    hasDiscount: true,
  },
  {
    name: 'Dorothy perkings',
    discountPercentage: '30',
    categoryName: 'Evening dress 1',
    previousPrice: '15',
    price: '12',
    hasDiscount: true,
  },
  {
    name: 'Dorothy perkings',
    discountPercentage: '30',
    categoryName: 'Evening dress 1',
    previousPrice: '15',
    price: '12',
    hasDiscount: true,
  },
];

const CategoryDetail = () => {
  return (
    <>
      <Tags.TagsContainer>
        <Tags.Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
          {tags.map(tag => (
            <Tag information={tag} onPress={() => {}} />
          ))}
        </Tags.Scroll>
      </Tags.TagsContainer>
      <Tags.Scroll>
        <Tags.ProductsContainer>
          {products.map(product => (
            <ProductCard product={product} />
          ))}
        </Tags.ProductsContainer>
      </Tags.Scroll>
    </>
  );
};

export default CategoryDetail;
