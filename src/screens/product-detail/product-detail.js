import React, {useState} from 'react';

import FeatureModal from '../../components/feature-modal/feature-modal';

import * as Tags from './styles';

const options = [
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

const ProductDetail = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tags.OpenModal onPress={() => setModalVisible(true)}>
        <Tags.Text>AJSDKFJSKAFJKSDJ</Tags.Text>
      </Tags.OpenModal>
      <FeatureModal
        title="Select size"
        options={options}
        onSelectOption={() => {}}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default ProductDetail;
