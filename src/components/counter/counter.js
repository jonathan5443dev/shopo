import React from 'react';
import * as Tag from './styles';
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import theme from '../../config/themes/default';
import shoppingCartActions from '../../redux/reducers/shopping-cart';
import Text from '../text/text';

const Counter = ({product}) => {
  const dispatch = useDispatch();
  return (
    <Tag.Container>
      <Tag.Button
        onPress={() =>
          dispatch(shoppingCartActions.RemoveProductFlow(product))
        }>
        <FontAwesomeIcon style={{color: theme.gray}} icon={faMinus} />
      </Tag.Button>
      <Tag.Quantity>
        <Text type="highlight">{`${product.quantity}`}</Text>
      </Tag.Quantity>
      <Tag.Button
        onPress={() => dispatch(shoppingCartActions.AddProductFlow(product))}>
        <FontAwesomeIcon style={{color: theme.gray}} icon={faPlus} />
      </Tag.Button>
    </Tag.Container>
  );
};

export default Counter;
