import styled from 'styled-components/native';
import theme from '../../config/themes/default';


export const Container = styled.View`
  height: 105px;
  width: 100%;
  background-color: ${theme.pureWhite};
  margin-vertical: 10px;
  border-radius: 10px;
  shadowColor: ${theme.black};
  shadow-offset: 5px 5px;
  shadowOpacity: 0.05;
  elevation: 24;
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

export const Options = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 12px;
  opacity: 0.5;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 2px;
  width: ${props => props.width || "100%"};
  justify-content: space-between;
  align-items: center;
`;
