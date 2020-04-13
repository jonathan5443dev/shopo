import React from 'react';

import ProductsCarousel from '../../components/products-carousel/products-carousel';

import * as Tags from './styles';

const Home = () => {
  return (
    <Tags.ScrollPage>
      <ProductsCarousel title="Sale" titleDescription="Super summer sale" />
      <ProductsCarousel title="New" titleDescription="New summer clothes" />
      <ProductsCarousel title="Pants" titleDescription="New pants" />
    </Tags.ScrollPage>
  );
};

export default Home;
