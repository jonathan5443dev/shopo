import styled from 'styled-components/native';

export const Container = styled.View`
  height: 105px;
  width: 100%;
  border-radius: 15px;
  margin-vertical: 8px;
  background-color: #ffffff;
  overflow: hidden;
  flex-direction: row;
`;
export const ImageContainer = styled.View`
  width: 30%;
  height: 104px;
`;

export const ProductImage = styled.Image`
  width: 100%;
`;

export const DetailContainer = styled.View`
  flex-direction: row;
`;

export const Detail = styled.View`
  padding-vertical: 8px;
  padding-horizontal: 16px;
  width: 70%;
`;

export const Price = styled.View`
  position: absolute;
  right: 16px;
  bottom: 12px;
`;

export const Options = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 12px;
  opacity: 0.5;
`;
