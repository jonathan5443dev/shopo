/* eslint react/prop-types: 0 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import DefaultTheme from '../themes/default';
import {emptyHeader} from './styles';
import Login from '../../screens/login/login';
import SingUp from '../../screens/sing-up/sing-up';
import Home from '../../screens/home/home';

import TabIcon from '../../components/tab-icon/tab-icon';

const AppNavigator = createStackNavigator({
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
      ShoppingCart: {
        screen: Home,
      },
      Help: {
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
      tabBarOptions: {
        inactiveTintColor: DefaultTheme.gray,
        activeTintColor: DefaultTheme.primary,
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          height: 64,
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
        },
      },
    },
  ),
});

export default createAppContainer(AppNavigator);
