import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

import ProductCard from '../product-card/product-card';
import Text from '../text/text';

import * as Tags from './styles';

const ProductsCarousel = ({title, titleDescription, products}) => {
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
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
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
