import React from 'react';
import Text from '../text/text';
import * as Tags from './styles';

import productDemo from '../../assets/images/product-1.png';

const ProductCard = () => (
  <Tags.Container>
    <Tags.ProductCardHeader>
      <Tags.ProductImage source={productDemo} resizeMode="cover" />
      <Tags.Discount>
        <Text color="white">-20%</Text>
      </Tags.Discount>
    </Tags.ProductCardHeader>
    <Tags.ProductCardFooter>
      <Text>Dorothy perkings</Text>
      <Text color="black">Evening dress</Text>
      <Tags.PriceContainer>
        <Text type="crossed">15$</Text>
        <Text color="primary">12$</Text>
      </Tags.PriceContainer>
    </Tags.ProductCardFooter>
  </Tags.Container>
);

export default ProductCard;
