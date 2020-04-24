import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';

import * as Tags from './styles';

const ProducImageCarousel = ({images}) => {
  return (
    <Tags.ProductImageCarouselContainer>
      <FlatList
        data={images}
        keyExtractor={item => `image-carousel-${item.id}`}
        horizontal={true}
        pagingEnabled={true}
        renderItem={({item}) => <Tags.Image source={item.resource} />}
      />
    </Tags.ProductImageCarouselContainer>
  );
};

ProducImageCarousel.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number.isRequired,
    resource: PropTypes.node.isRequired,
  }).isRequired,
};

export default ProducImageCarousel;
