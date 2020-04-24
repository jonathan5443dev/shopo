import React from 'react';

import ProductsCarousel from '../../components/products-carousel/products-carousel';
import Container from '../../components/container/container';
import Slider from '../../components/slider/slider';
import {ProductsContainer} from './styles';

const Home = () => {
  const slides = [
    {
      url: 'https://picsum.photos/600/300',
      text: 'Summer sales',
    },
    {
      url: 'https://picsum.photos/600/300',
      text: 'Winter sales',
    },
  ];
  return (
    <Container>
      <Slider slides={slides} />
      <ProductsContainer>
        <ProductsCarousel title="Sale" titleDescription="Super summer sale" />
        <ProductsCarousel title="New" titleDescription="New summer clothes" />
        <ProductsCarousel title="Pants" titleDescription="New pants" />
      </ProductsContainer>
    </Container>
  );
};

export default Home;
