import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.pureWhite};
  width: 100%;
  min-height: 170px;
  justifyContent: space-around;
  alignItems: center;
  shadowColor: ${theme.black};
  shadow-offset: 5px 5px;
  shadowOpacity: 0.05;
  elevation: 24;
  borderRadius: 8px;
  padding: 15px 15px 10px 15px;
  margin: 15px 0px;
  backgroundColor: ${theme.pureWhite};
  marginVertical: 10px;
  marginHorizontal: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 30%;
`;
