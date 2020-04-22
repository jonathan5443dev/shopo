import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Container = styled.View`
  marginVertical: 20px;
`;

export const AddressCard = styled.View`
  backgroundColor: ${theme.pureWhite};
  minHeight: 100px;
  width: 100%;
  marginVertical: 15px;
  borderRadius: 8px;
  padding: 20px;
`;

export const ChangeLink = styled.TouchableOpacity``;

export const Name = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`;

export const Address = styled.View`
  marginTop: 10px;
  minHeight: 41px;
  justifyContent: space-between;
`;
