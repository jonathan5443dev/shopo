import React from 'react';
import {useTranslation} from 'react-i18next';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import Container from '../../components/container/container';
import ProductCardBag from '../../components/product-card-bag/product-card-bag';
import {ProductContainer, Footer, Total} from './styles.js';

const mockedProduct = {
  name: 'Dorothy perkings',
  discountPercentage: '30',
  categoryName: 'Evening dress 1',
  previousPrice: '15',
  price: '12',
  hasDiscount: true,
  quantity: 2,
  detail: 'Loren ipsum ammet',
};

const Bag = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text type="headline">{t('bag.title')}</Text>
      <ProductContainer>
        <ProductCardBag product={mockedProduct} />
        <ProductCardBag product={mockedProduct} />
        <ProductCardBag product={mockedProduct} />
        <ProductCardBag product={mockedProduct} />
        <ProductCardBag product={mockedProduct} />
      </ProductContainer>
      <Footer>
        <Total>
          <Text color="gray">{t('bag.total')}</Text>
          <Text type="headline 3">130$</Text>
        </Total>
        <Button value={t('bag.checkout')} />
      </Footer>
    </Container>
  );
};

export default Bag;
