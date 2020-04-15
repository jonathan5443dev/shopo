import React from 'react';

import Text from '../text/text';

import * as Tags from './styles';

const Tag = ({information, onPress}) => (
  <Tags.TagTouchable>
    <Tags.TagContainer>
      <Text color="white">{information.name}</Text>
    </Tags.TagContainer>
  </Tags.TagTouchable>
);

export default Tag;
