/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {hasNotch} from 'react-native-device-info';
import DefaultTheme from '../themes/default';
import {Platform, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const height = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 100;
  }
  return 50;
};

export const emptyHeader = () => ({
  title: '',
  headerStyle: {
    backgroundColor: DefaultTheme.background,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
    height: height(),
  },
});

export const titleHeader = (navigation, title) => ({
  title,
  headerStyle: {
    backgroundColor: '#ffffff',
    elevation: 1,
    borderBottomWidth: 0,
    height: height(),
  },

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: 16}} />
    </TouchableOpacity>
  ),
});

export const searchHeader = (navigation, title = '') => ({
  title,
  headerStyle: {
    backgroundColor: DefaultTheme.background,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
    height: height(),
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: 16}} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity onPress={() => {}}>
      <FontAwesomeIcon icon={faSearch} style={{marginRight: 16}} />
    </TouchableOpacity>
  ),
});

export default emptyHeader;
