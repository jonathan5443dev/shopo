import styled from 'styled-components/native';

export const ArrowDown = styled.Text`
  font-size: 9px;
  padding-left: 5px;
  padding-top: 2px;
  opacity: ${props => (props.editable ? 1 : 0.2)};
`;
