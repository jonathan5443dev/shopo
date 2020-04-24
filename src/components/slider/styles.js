import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const SliderContainer = styled.FlatList`
  width: ${Dimensions.get('screen').width};
  position: absolute;
`;

export const Slide = styled.View`
  width: ${Dimensions.get('screen').width};
`;

export const SlideImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const SlideText = styled.View`
  position: absolute;
  bottom: 20;
  left: 10px;
`;
