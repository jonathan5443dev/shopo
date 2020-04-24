import React, {useState} from 'react';

import FeatureModal from '../../components/feature-modal/feature-modal';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import Container from '../../components/container/container';
import ProductImageCarousel from '../../components/product-image-carousel/product-image-carousel';

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

const ProductDetail = () => {
  const [modalSize, setModalSize] = useState(false);
  const [modalColor, setModalColor] = useState(false);
  const {t} = useTranslation();

  return (
    <>
      <ProductImageCarousel images={images} />
      <Container>
        <Tags.ContentScrollable>
          <Tags.FeatureContainer>
            <Tags.OpenModal onPress={() => setModalSize(true)}>
              <Text type="headline 3">Size</Text>
            </Tags.OpenModal>
            <Tags.OpenModal onPress={() => setModalColor(true)}>
              <Text type="headline 3">Color</Text>
            </Tags.OpenModal>
          </Tags.FeatureContainer>
          <Tags.BasicInformation>
            <Tags.NameAndBrand>
              <Text type="headline 2">Name</Text>
              <Text type="headline 3">Brand Name</Text>
            </Tags.NameAndBrand>
            <Tags.Price>
              <Text type="headline 3">$ 19.00</Text>
            </Tags.Price>
          </Tags.BasicInformation>
          <Text type="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae mi nunc. Donec pretium mauris non sapien pretium, sit amet
            faucibus elit elit imperdiet. Quisque porta neque eget mauris
            placerat, placerat, vestibulum. Aenean auctor lorem in tellus
            tincidunt, sed luctus nisi nisi pharetra. Vivamus neque justo,
            dignissim ut mi id, laoreet mollis mollis tortor. Integer ut
            fermentum turpis, ac sagittis justo. Praesent lacinia nisl sed ex
            sagittis, sed tincidunt justo tincidunt. Ut sollicitudin interdum
            mi, at fermentum augue finibus vitae. Integer in dignissim sapien,
            eget rutrum mi. Morbi congue, tortor nec aliquet ultricies, leo ex
            porta sapien, et porta justo enim at augue. Etiam at lacus urna.
            Donec a ligula ac augue convallis molestie a sit amet mi.
          </Text>
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
        <Button value={t('addToCart')} />
      </Tags.ContainerButton>
    </>
  );
};

export default ProductDetail;
