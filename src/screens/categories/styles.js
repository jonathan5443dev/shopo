import styled from 'styled-components/native';
import SquareTabBar from '../../components/tab-bar/square-tab';

import theme from '../../config/themes/default';

export const Tabs = styled(SquareTabBar)``;

export const SummerSalesContainer = styled.View`
  background-color: ${theme.primary};
  padding-vertical: 20px;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
  border-radius: 10px;
`;

export const CategoryTab = styled.View`
  background-color: #ffffff;
  padding-vertical: 20px;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
  border-radius: 10px;
`;

export const CategoryTabContainer = styled.TouchableOpacity``;

export const CategoryContainer = styled.ScrollView``;
