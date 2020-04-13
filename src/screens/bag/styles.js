import styled from 'styled-components/native';
import theme from '../../config/themes/default';
export const ProductContainer = styled.ScrollView`
  margin-vertical: 16px;
  max-height: 100%;
`;

export const Footer = styled.View`
  width: 110%;
  padding-horizontal: 16px;
  bottom: 0;
  padding-bottom: 70px;
  position: absolute;
  background-color: ${theme.background};
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 8px;
`;
