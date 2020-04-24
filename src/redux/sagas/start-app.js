import {takeLatest, select, delay} from 'redux-saga/effects';
import App from '../../config/app';
import SplashScreen from 'react-native-splash-screen';

export const getAuthentication = state => state.user.authentication;

function* startApplicationFlow() {
  yield delay(100);
  try {
    const authentication = yield select(getAuthentication);
    if (authentication !== '') {
      App.navigation.navigate('Home');
    } else {
      App.navigation.navigate('Login');
    }
    yield delay(100);
    SplashScreen.hide();
  } catch (e) {
    App.firebase.crashlytics.recordError(new Error('hello error'));
    App.navigation.navigate('Login');
    SplashScreen.hide();
  }
}

function* startAppFlow() {
  yield takeLatest('START_APP_FLOW', startApplicationFlow);
}

export default startAppFlow;
