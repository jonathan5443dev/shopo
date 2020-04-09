import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const InputContainer = styled.View`
  width: 100%;
  height: 64px;
  background-color: white;
  border-radius: 4px;
  border-width: 1px;
  margin-bottom: 6px;
  padding-bottom: 5px;
  border-color: ${props => props.borderColor};
  shadow-color: ${theme.black};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 2.84px;
  elevation: 3;
`;
export const IconContainer = styled.View`
  padding: 10px;
  padding-left: 18px;
  padding-right: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Icon = styled.Image`
  height: 16px;
  width: 16px;
  resize-mode: contain;
  tint-color: ${props => props.tintColor};
`;

export const InputField = styled.TextInput`
  flex: 1;
  width: 100%;
  font-family: ${theme.fontFamily}
  padding: 10px;
  opacity: ${props => (props.editable ? 1 : 0.5)};
  background-color: white;
`;

export const ErrorIcon = styled.Image`
  height: 17px;
  width: 17px;
  margin-right: 8px;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: red;
  font-family: ${props => theme.fontFamily}
  margin-bottom: 8px;
  padding-left: 10px;
  width: 100%;
`;

export const LabelContainer = styled.View`
  padding-top: 7px;
  padding-left: 10px;
  border-width: 0px;
`;

export const Label = styled.Text`
  align-self: flex-start;
  opacity: 0.6;
  border-width: 0px;
  color: ${props => props.color};
`;
