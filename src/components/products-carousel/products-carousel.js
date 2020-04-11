import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

import ProductCard from '../product-card/product-card';
import Text from '../text/text';

import * as Tags from './styles';

const mockedProduct = {
  name: 'Dorothy perkings',
  discountPercentage: '30',
  categoryName: 'Evening dress 1',
  previousPrice: '15',
  price: '12',
  hasDiscount: true,
};

const ProductsCarousel = ({title, titleDescription}) => {
  const {t} = useTranslation();

  return (
    <>
      <Tags.ProductsCarouselHeader>
        <Text type="headline" color="black">
          {title}
        </Text>
        <Text type="highlight">{titleDescription}</Text>
        <Tags.ViewAllLink type="body" color="black">
          <Text color="black">{t('viewAll')}</Text>
        </Tags.ViewAllLink>
      </Tags.ProductsCarouselHeader>
      <Tags.ScrollContainer horizontal={true}>
        <Tags.ProductsCarouselContainer>
          <ProductCard product={mockedProduct} />
          <ProductCard product={mockedProduct} />
          <ProductCard product={mockedProduct} />
          <ProductCard product={mockedProduct} />
          <ProductCard product={mockedProduct} />
        </Tags.ProductsCarouselContainer>
      </Tags.ScrollContainer>
    </>
  );
};

ProductsCarousel.propTypes = {
  title: PropTypes.string,
  titleDescription: PropTypes.string,
};

ProductsCarousel.defaultProps = {
  title: 'Sale',
  titleDescription: 'Super summer sale',
};

export default ProductsCarousel;
