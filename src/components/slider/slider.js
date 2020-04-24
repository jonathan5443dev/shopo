import React from 'react';
import {SliderContainer, Slide, SlideImage, SlideText} from './styles.js';
import Text from '../text/text';

const Slider = ({slides}) => {
  const renderSlide = slide => (
    <Slide>
      <SlideImage source={{uri: slide.url}} />
      {slide.text && (
        <SlideText>
          <Text color="white" type="headline">
            {slide.text}
          </Text>
        </SlideText>
      )}
    </Slide>
  );
  return (
    <SliderContainer
      data={slides}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => renderSlide(item)}
      keyExtractor={(item, index) => String(index)}
      pagingEnabled={true}
      horizontal={true}
    />
  );
};

export default Slider;
