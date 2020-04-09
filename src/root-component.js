import './config/translations/i18n';
import {ThemeProvider} from 'styled-components';
import React, {useState, useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import startAppActions from './redux/reducers/start-app';
import DefaultTheme from './config/themes/default';
import MainNavigator from './config/navigation/main-navigator';
import App from './config/app';

const RootComponent = () => {
  const [isReady, setIsReady] = useState(false);

  const disableFontScaling = () => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  };

  useEffect(() => {
    App.boot().then(() => {
      setIsReady(true);
      disableFontScaling();
      // App.redux.store.dispatch(startAppActions.startAppFlow());
    });
  }, []);

  if (isReady) {
    return (
      <Provider store={App.redux.store}>
        <PersistGate loading={null} persistor={App.redux.persistor}>
          <ThemeProvider theme={DefaultTheme}>
            <MainNavigator ref={nav => App.navigation.setNavigator(nav)} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
  return <></>;
};

export default RootComponent;
