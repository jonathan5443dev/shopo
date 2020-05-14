import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Content = styled.View`
  height: 100%;
  justifyContent: space-between;
  alignItems: center;
  paddingVertical: 50px;
  paddingHorizontal: 5px;
  background-color: ${theme.pureWhite}
`;

export const TopContent = styled.View`
  width: 100%;
  justifyContent: space-around;
  alignItems: center;
`;

export const Description = styled.View`
  align-items: center;
`;

export const BagsImages = styled.Image`
  height: 50%;
  width: 50%;
  resizeMode: center;
`;
