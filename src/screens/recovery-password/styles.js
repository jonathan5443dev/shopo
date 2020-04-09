import styled from 'styled-components/native';
import theme from '../../config/themes/default';
import {Platform} from 'react-native';

export const Form = styled.View`
  margin-vertical: 50px;
`;

export const ForgotPasswordLink = styled.TouchableOpacity`
  margin-top: 16px;
  margin-bottom: 24px;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

export const ForgotPassword = styled.Text``;

export const ForgotPasswordArrow = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '20px' : '40px;'};
  margin-left: 8px;
  margin-top: ${Platform.OS === 'ios' ? '0px' : '-15px;'};
  color: ${theme.primary};
`;

export const SocialLogin = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const SocialCopy = styled.Text`
  text-align: center;
  margin-top: 20%;
  margin-bottom: 8px;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 92px;
  height: 64px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  margin: 8px;
  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const SocialButtonImage = styled.Image`
  height: 25px;
  width: 25px;
`;

export const TextContainer = styled.View`
  margin-top: 50px;
`;
