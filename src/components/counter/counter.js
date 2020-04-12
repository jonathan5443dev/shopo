import React from 'react';
import * as Tag from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import theme from '../../config/themes/default';
import Text from '../text/text';

const Counter = ({quantity}) => {
  return (
    <Tag.Container>
      <Tag.Button onPress={() => {}}>
        <FontAwesomeIcon style={{color: theme.gray}} icon={faMinus} />
      </Tag.Button>
      <Tag.Quantity>
        <Text type="highlight">{`${quantity}`}</Text>
      </Tag.Quantity>
      <Tag.Button onPress={() => {}}>
        <FontAwesomeIcon style={{color: theme.gray}} icon={faPlus} />
      </Tag.Button>
    </Tag.Container>
  );
};

export default Counter;
