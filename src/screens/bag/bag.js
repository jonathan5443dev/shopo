import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import Container from '../../components/container/container';
import ProductCardBag from '../../components/product-card-bag/product-card-bag';
import {ProductContainer, Footer, Total, Empty} from './styles.js';

const Bag = () => {
  const {t} = useTranslation();
  const shoppingCart = useSelector(state => state.shoppingCart);
  const isEmpty = Object.keys(shoppingCart.products).length === 0;
  console.log(shoppingCart);
  return (
    <Container>
      <Text type="headline">{t('bag.title')}</Text>
      <ProductContainer>
        {!isEmpty ? (
          Object.keys(shoppingCart.products).map(productKey => (
            <ProductCardBag product={shoppingCart.products[productKey]} />
          ))
        ) : (
          <Empty>
            <Text color="gray">{t('bag.empty')}</Text>
          </Empty>
        )}
      </ProductContainer>
      <Footer>
        <Total>
          <Text color="gray">{t('bag.total')}</Text>
          <Text type="headline 3">{shoppingCart.total}$</Text>
        </Total>
        <Button disabled={isEmpty} value={t('bag.checkout')} />
      </Footer>
    </Container>
  );
};

export default Bag;
