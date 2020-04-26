import React from 'react';
import Text from '../text/text';
import Counter from '../counter/counter';
import { useTranslation } from 'react-i18next';
import productDemo from '../../assets/images/product-1.png';
import theme from '../../config/themes/default';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import * as Tags from './styles';

const ProductOrderCard = ({ product }) => {
  const { t } = useTranslation();
  return (
    <Tags.Container>
      <Tags.ImageContainer>
        <Tags.ProductImage source={productDemo} resizeMode="cover" />
      </Tags.ImageContainer>
      <Tags.Detail>
        <Text type="highlight">{product.name}</Text>
        <Tags.DetailContainer>
          <Text type="small" color="gray">
            {product.description}
          </Text>
          <Text type="small">{product.detail}</Text>
        </Tags.DetailContainer>
        <Tags.Row width="50%">
          <Text type="small" color="gray">
            {`${t('orderDetail.color')}: `}
            <Text type="small" color="black">{product.color}</Text>
          </Text>
          <Text type="small" color="gray">
            {`${t('orderDetail.size')}: `}
            <Text type="small" color="black">{product.size}</Text>
          </Text>
        </Tags.Row>
        <Tags.Row>
          <Text type="small" color="gray">
            {`${t('orderDetail.units')}: `}
            <Text type="small" color="black">{product.units}</Text>
          </Text>
          <Text type="highlight">{`${product.price}$`}</Text>
        </Tags.Row>
      </Tags.Detail>
    </Tags.Container>
  );
};

export default ProductOrderCard;
