import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import Text from '../text/text';
import * as Tags from './styles';

import productDemo from '../../assets/images/product-1.png';
import productActions from '../../redux/reducers/product';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const renderDiscountPercentage = () => {
    if (product.hasDiscount) {
      return (
        <Tags.Discount>
          <Text color="white">{`-${product.discountPercentage}%`}</Text>
        </Tags.Discount>
      );
    }
    return null;
  };

  const renderPreviousPrice = () => {
    if (product.hasDiscount) {
      return <Text type="crossed">{`${product.previousPrice}$`}</Text>;
    }
    return null;
  };

  return (
    <Tags.Container
      onPress={() => dispatch(productActions.startProductDetailFlow(product))}>
      <Tags.ProductCardHeader>
        <Tags.ProductImage source={productDemo} resizeMode="cover" />
        {renderDiscountPercentage()}
      </Tags.ProductCardHeader>
      <Tags.ProductCardFooter>
        <Text>{product.name}</Text>
        <Text color="black">{product.categoryName}</Text>
        <Tags.PriceContainer>
          {renderPreviousPrice()}
          <Text color="primary">{`${product.price}$`}</Text>
        </Tags.PriceContainer>
      </Tags.ProductCardFooter>
    </Tags.Container>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    discountPercentage: PropTypes.string,
    categoryName: PropTypes.string.isRequired,
    previousPrice: PropTypes.string,
    price: PropTypes.string.isRequired,
    hasDiscount: PropTypes.bool,
  }),
};

ProductCard.defaultProps = {
  discountPercentage: '20',
  previousPrice: '15',
  hasDiscount: false,
};

export default ProductCard;
