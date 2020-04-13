/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types';

import theme from '../../config/themes/default';

const SquareTabBar = ({children}) => {
  return (
    <ScrollableTabView
      locked={true}
      scrollWithoutAnimation={true}
      tabBarActiveTextColor={theme.primary}
      renderTabBar={() => (
        <ScrollableTabBar
          style={{
            borderWidth: 0,
            backgroundColor: theme.white,
            marginVertical: 10,
          }}
          underlineStyle={{
            position: 'absolute',
            height: 4,
            backgroundColor: theme.primary,
            bottom: 0,
          }}
        />
      )}>
      {children}
    </ScrollableTabView>
  );
};

SquareTabBar.propTypes = {
  children: PropTypes.node,
};

SquareTabBar.defaultProps = {
  children: null,
};

export default SquareTabBar;
