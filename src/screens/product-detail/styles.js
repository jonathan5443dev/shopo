import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const OpenModal = styled.TouchableOpacity`
  background-color: ${theme.white};
  padding-vertical: 10px;
  width: 138px;
  border-width: 1px;
  border-radius: 10px;
  padding-horizontal: 10px;
`;

export const FeatureContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const BasicInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NameAndBrand = styled.View`
  flex: 2;
`;

export const Price = styled.View`
  flex: 1;
`;

export const ContainerButton = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;
