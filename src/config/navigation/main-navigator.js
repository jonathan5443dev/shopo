/* eslint react/prop-types: 0 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import DefaultTheme from '../themes/default';
import {emptyHeader, searchHeader} from './styles';
import Login from '../../screens/login/login';
import RecoveryPassword from '../../screens/recovery-password/recovery-password';
import SingUp from '../../screens/sing-up/sing-up';
import Home from '../../screens/home/home';
import Bag from '../../screens/bag/bag';
import Categories from '../../screens/categories/categories';

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
  Home: createBottomTabNavigator(
    {
      Home: {
        screen: Home,
      },
      Categories: {
        screen: Categories,
      },
      Bag: {
        screen: Bag,
      },
      Favorites: {
        screen: Home,
      },
      Account: {
        screen: Home,
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
