import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const List = styled.FlatList`
  width: 100%;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
  padding-vertical: 16;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-vertical: 24px;
`;

export const Information = styled.View`
  padding-left: 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  marginVertical: 15px;
`;

export const FilterActiveButton = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  border-radius: 20px;
  background-color: ${theme.black};
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;