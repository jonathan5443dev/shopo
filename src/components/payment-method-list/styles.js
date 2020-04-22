import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Container = styled.View`
  marginVertical: 10px;
`;

export const PaymentCard = styled.View`
  minHeight: 100px;
  width: 100%;
  marginVertical: 15px;
  borderRadius: 8px;
  padding: 20px;
`;

export const ChangeLink = styled.TouchableOpacity``;

export const Title = styled.View`
  flexDirection: row;
  minHeight: 41px;
  justifyContent: space-between;
  marginRight: 24px;
`;

export const PaymentMethodContainer = styled.TouchableOpacity`
  alignItems: center;
  flexDirection: row;
`;

export const CardImage = styled.Image`
  width: 100%;
`;

export const CardImageContainer = styled.View`
  width: 80px;
  height: 80px;
`;
