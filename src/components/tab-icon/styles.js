import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image`
  height: 40px;
  resize-mode: contain;
  tint-color: ${props => props.color};
`;
