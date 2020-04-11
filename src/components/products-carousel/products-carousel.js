import React from 'react';

import ProductCard from '../product-card/product-card';
import Text from '../text/text';

import * as Tags from './styles';

const ProductsCarousel = () => (
  <>
    <Tags.ProductsCarouselHeader>
      <Text type="headline" color="black">
        Sale
      </Text>
      <Text type="highlight">Super summer sale</Text>
      <Tags.ViewAllLink type="body" color="black">
        <Text color="black">View all</Text>
      </Tags.ViewAllLink>
    </Tags.ProductsCarouselHeader>
    <Tags.ScrollContainer horizontal={true}>
      <Tags.ProductsCarouselContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Tags.ProductsCarouselContainer>
    </Tags.ScrollContainer>
  </>
);

export default ProductsCarousel;

/*
3. Crear boton favoritos
5. Mandar todo a i18n
6. Agregar props en carrusel y product card
*/
