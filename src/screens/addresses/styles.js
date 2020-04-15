import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const AddressList = styled.ScrollView`
  margin-vertical: 16px;
  max-height: 100%;
`;

export const AddButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 28px;
  background-color: ${theme.black};
  position: absolute;
  right: 16px;
  bottom: 10%;
  justify-content: center;
  align-items: center;
`;
