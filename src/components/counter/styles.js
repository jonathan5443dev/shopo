import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Quantity = styled.View`
  padding: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  width: 36px;
  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  height: 36px;
`;
