import React from 'react';

import ProductsCarousel from '../../components/products-carousel/products-carousel';
import Container from '../../components/container/container';

const Home = () => {
  return (
    <Container>
      <ProductsCarousel title="Sale" titleDescription="Super summer sale" />
      <ProductsCarousel title="New" titleDescription="New summer clothes" />
      <ProductsCarousel title="Pants" titleDescription="New pants" />
    </Container>
  );
};

export default Home;
