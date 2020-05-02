import React from 'react';

import ProductsCarousel from '../../components/products-carousel/products-carousel';
import Container from '../../components/container/container';
import Slider from '../../components/slider/slider';
import {ProductsContainer} from './styles';

const Home = ({navigation}) => {
  const products = navigation.state.params.products;
  console.log(products);
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
        <ProductsCarousel
          products={products.sales}
          title="Sale"
          titleDescription="Super summer sale"
        />
        <ProductsCarousel
          products={products.news}
          title="New"
          titleDescription="New summer clothes"
        />
        <ProductsCarousel
          products={products.pants}
          title="Pants"
          titleDescription="New pants"
        />
      </ProductsContainer>
    </Container>
  );
};

export default Home;
