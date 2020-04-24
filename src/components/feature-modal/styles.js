import styled from 'styled-components/native';

import theme from '../../config/themes/default';

export const Modal = styled.Modal``;

export const Content = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const ModalContainer = styled.View``;

export const Title = styled.Text``;

export const FeatureContainer = styled.View`
  background-color: ${theme.whiteBackground};
  height: 300px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  height: 10px;
  border-radius: 5px;
  background-color: ${theme.grayDark};
  width: 100px;
  align-self: center;
  margin-vertical: 20px;
`;

export const Item = styled.TouchableOpacity`
  background-color: ${theme.white};
  border-radius: 10px;
  padding-vertical: 10px;
  width: 100px;
  border-width: 1px;
  border-color: ${theme.gray};
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const ItemValue = styled.Text``;

export const ItemsContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-horizontal: 20px;
  margin-top: 10px;
`;
