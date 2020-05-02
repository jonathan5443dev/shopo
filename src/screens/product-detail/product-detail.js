import React, {useState} from 'react';

import FeatureModal from '../../components/feature-modal/feature-modal';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import {useDispatch} from 'react-redux';
import Container from '../../components/container/container';
import ProductImageCarousel from '../../components/product-image-carousel/product-image-carousel';
import shoppingCartActions from '../../redux/reducers/shopping-cart';
import * as Tags from './styles';

import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product1.png';
import product4 from '../../assets/images/product2.png';

import {useTranslation} from 'react-i18next';

const sizeOptions = [
  {
    id: 1,
    value: 'XS',
  },
  {
    id: 2,
    value: 'S',
  },
  {
    id: 3,
    value: 'M',
  },
  {
    id: 4,
    value: 'L',
  },
  {
    id: 5,
    value: 'XL',
  },
];

const colorOptions = [
  {
    id: 1,
    value: 'Negro',
  },
  {
    id: 2,
    value: 'Rojo',
  },
];

const images = [
  {id: 1, resource: product1},
  {id: 1, resource: product2},
  {id: 1, resource: product3},
  {id: 1, resource: product4},
];

const ProductDetail = ({navigation}) => {
  const product = navigation.state.params.product;
  const [modalSize, setModalSize] = useState(false);
  const [modalColor, setModalColor] = useState(false);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <ProductImageCarousel images={images} />
      <Container>
        <Tags.ContentScrollable>
          <Tags.FeatureContainer>
            <Tags.OpenModal onPress={() => setModalSize(true)}>
              <Text type="headline 3">{product.size}</Text>
            </Tags.OpenModal>
            <Tags.OpenModal onPress={() => setModalColor(true)}>
              <Text type="headline 3">{product.color}</Text>
            </Tags.OpenModal>
          </Tags.FeatureContainer>
          <Tags.BasicInformation>
            <Tags.NameAndBrand>
              <Text type="headline 2">{product.name}</Text>
              <Text type="headline 3">{product.brand}</Text>
            </Tags.NameAndBrand>
            <Tags.Price>
              <Text type="headline 3">$ {product.price}</Text>
            </Tags.Price>
          </Tags.BasicInformation>
          <Text type="description">{product.description}</Text>
        </Tags.ContentScrollable>
        <FeatureModal
          title="Select size"
          options={sizeOptions}
          onSelectOption={() => {}}
          visible={modalSize}
          onRequestClose={() => setModalSize(false)}
        />
        <FeatureModal
          title="Select color"
          options={colorOptions}
          onSelectOption={() => {}}
          visible={modalColor}
          onRequestClose={() => setModalColor(false)}
        />
      </Container>
      <Tags.ContainerButton>
        <Button
          onPress={() => dispatch(shoppingCartActions.AddProductFlow(product))}
          value={t('addToCart')}
        />
      </Tags.ContainerButton>
    </>
  );
};

export default ProductDetail;
