import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Container = styled.View`
  height: 260px;
  width: 160px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const Discount = styled.View`
  background-color: ${theme.primary};
  border-radius: 20px;
  padding-vertical: 10px;
  width: 60px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ProductImage = styled.Image`
  position: absolute;
  top: 0px;
  width: 100%;
  zIndex: -1;
  border-radius: 15px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
`;

export const ProductCardHeader = styled.View`
  height: 184px;
`;

export const ProductCardFooter = styled.View`
  padding: 5px;
`;
