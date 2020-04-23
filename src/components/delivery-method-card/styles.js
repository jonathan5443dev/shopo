import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Container = styled.View`
  marginVertical: 10px;
`;

export const DeliveryCardContainer = styled.TouchableOpacity`
  marginVertical: 12px;
`;

export const DeliveryCard = styled.View`
  justifyContent: center;
  alignItems: center;
  shadowColor: ${theme.black};
  shadow-offset: 5px 5px;
  shadowOpacity: 0.05;
  elevation: 24;
  borderRadius: 8px;
  padding: 5px;
  minHeight: 80px;
  width: 110px;
  margin: 0px 10px;
  backgroundColor: ${theme.pureWhite};
  marginVertical: 10px;
  marginHorizontal: 5px;
`;

export const Title = styled.View`
  minHeight: 41px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardImageContainer = styled.View`
  justifyContent: center;
  alignItems: center;
  width: 100px;
  height: 50px;
`;
