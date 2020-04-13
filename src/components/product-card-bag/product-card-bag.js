import React from 'react';
import Text from '../text/text';
import Counter from '../counter/counter';
import {useTranslation} from 'react-i18next';
import productDemo from '../../assets/images/product-1.png';
import theme from '../../config/themes/default';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

import * as Tags from './styles';

const ProductCardBag = ({product}) => {
  const {t} = useTranslation();
  return (
    <Tags.Container>
      <Tags.ImageContainer>
        <Tags.ProductImage source={productDemo} resizeMode="cover" />
      </Tags.ImageContainer>
      <Tags.Detail>
        <Text type="highlight">{product.name}</Text>
        <Tags.DetailContainer>
          <Text type="small" color="gray">
            {t('bag.detail')}
          </Text>
          <Text type="small">{product.detail}</Text>
        </Tags.DetailContainer>
        <Counter quantity={product.quantity} />
        <Tags.Price>
          <Text type="highlight">{`${product.price}$`}</Text>
        </Tags.Price>
      </Tags.Detail>
      <Tags.Options onPress={() => {}}>
        <FontAwesomeIcon style={{color: theme.gray}} icon={faEllipsisV} />
      </Tags.Options>
    </Tags.Container>
  );
};

export default ProductCardBag;
