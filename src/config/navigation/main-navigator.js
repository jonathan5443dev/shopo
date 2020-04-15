/* eslint react/prop-types: 0 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import DefaultTheme from '../themes/default';
import {emptyHeader, searchHeader, titleHeader} from './styles';
import Login from '../../screens/login/login';
import RecoveryPassword from '../../screens/recovery-password/recovery-password';
import SingUp from '../../screens/sing-up/sing-up';
import Home from '../../screens/home/home';
import Bag from '../../screens/bag/bag';
import Addresses from '../../screens/addresses/addresses';
import Categories from '../../screens/categories/categories';
import Profile from '../../screens/profile/profile';
import CategoryDetail from '../../screens/category-detail/category-detail';

import ProductCarousel from '../../components/products-carousel/products-carousel';

import TabIcon from '../../components/tab-icon/tab-icon';

const AppNavigator = createStackNavigator({
  Product: {
    screen: ProductCarousel,
    navigationOptions: () => emptyHeader(),
  },
  RecoveryPassword: {
    screen: RecoveryPassword,
    navigationOptions: () => emptyHeader(),
  },
  SingUp: {
    screen: SingUp,
    navigationOptions: () => emptyHeader(),
  },
  Login: {
    screen: Login,
    navigationOptions: () => emptyHeader(),
  },
  Addresses: {
    screen: Addresses,
    navigationOptions: ({navigation}) =>
      titleHeader(navigation, 'Shipping Addresses'),
  },
  Home: createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: () => emptyHeader(),
      },
      Categories: createStackNavigator({
        Categories: {screen: Categories},
        CategoryDetail: {
          screen: CategoryDetail,
          navigationOptions: () => emptyHeader(),
        },
      }),
      Bag: {
        screen: Bag,
      },
      Favorites: {
        screen: Home,
      },
      Account: {
        screen: Profile,
      },
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor, focused}) => {
          const {routeName} = navigation.state;
          return (
            <TabIcon name={routeName} color={tintColor} focused={focused} />
          );
        },
      }),
      navigationOptions: ({navigation}) => searchHeader(navigation),
      tabBarOptions: {
        inactiveTintColor: DefaultTheme.gray,
        activeTintColor: DefaultTheme.primary,
        keyboardHidesTabBar: true,
        style: {
          height: 64,
          backgroundColor: '#ffffff',
          borderTopColor: 'transparent',
        },
      },
    },
  ),
});

export default createAppContainer(AppNavigator);
