import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainer,
  ButtonText,
  ButtonOutlinedContainer,
  ButtonOutlinedText,
  IconOutlined,
  Icon,
} from './styles.js';

/*
 * Available colors
 * -- aquamarine(default)
 * -- navyBlue
 * -- white
 */
const CustomButton = ({value, onPress, color, disabled, outlined, icon}) => {
  if (outlined) {
    return (
      <ButtonOutlinedContainer
        color={color}
        onPress={onPress}
        disabled={disabled}>
        <ButtonOutlinedText color={color}>{value}</ButtonOutlinedText>
        {icon && <IconOutlined source={icon} color={color} />}
      </ButtonOutlinedContainer>
    );
  }

  return (
    <ButtonContainer onPress={onPress} color={color} disabled={disabled}>
      <ButtonText color={color}>{value}</ButtonText>
      {icon && <Icon source={icon} color={color} height="14" width="8" />}
    </ButtonContainer>
  );
};

CustomButton.propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  icon: PropTypes.number,
};

CustomButton.defaultProps = {
  value: '',
  onPress: () => {},
  color: 'primary',
  disabled: false,
  outlined: false,
  icon: undefined,
};

export default CustomButton;
