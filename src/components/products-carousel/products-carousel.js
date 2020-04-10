import React from 'react';

import ProductCard from '../product-card/product-card';
import Text from '../text/text';

import * as Tags from './styles';

const ProductsCarousel = () => (
  <>
    <Text type="headline" color="black">
      Sale
    </Text>
    <Text type="highlight">Super summer sale</Text>
    <Tags.ProductsCarouselContainer>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Tags.ProductsCarouselContainer>
  </>
);

export default ProductsCarousel;
