import styled from 'styled-components/native';
import theme from '../../config/themes/default';

const validateShadowByColor = props => {
  const {color, disabled} = props;
  if (color === 'transparent' || color === 'softGrey') {
    return 0;
  }

  if (disabled) {
    return 0;
  }

  return 5;
};

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => theme[props.color]};
  margin-vertical: 10px;
  align-self: center;
  width: 100%;
  border-radius: 25px;
  height: 48px;
  padding: 10px;
  shadow-color: ${theme.black};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 2.84px;
  elevation: ${props => validateShadowByColor(props)};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${props => (props.color === 'primary' ? theme.white : theme.black)};
  text-align: center;
  text-transform: uppercase
  font-size: 16px;
`;

export const ButtonOutlinedContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  border-color: ${props => theme[props.color]};
  border-width: 1.5px;
  justify-content: center;
  align-content: center;
  width: 100%;
  border-radius: 25px;
  height: 40px;
  opacity: ${props => (props.disabled ? '0.2' : '1')};
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const ButtonOutlinedText = styled.Text`
  color: ${props => (props.color === 'primary' ? theme.white : theme.black)};
  text-align: center;
  font-size: 16px;
`;

export const IconOutlined = styled.Image`
  height: 18px;
  width: 18px;
  resize-mode: contain;
  tint-color: ${props => theme[props.color]};
`;

export const Icon = styled.Image`
  height: ${props => props.height};
  width: ${props => props.width};
  resize-mode: contain;
  tint-color: ${props => (props.color === 'white' ? theme.black : theme.black)};
  margin-left: 15px;
  margin-top: 2px;
`;
