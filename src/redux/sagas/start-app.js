import {takeLatest, delay} from 'redux-saga/effects';
import App from '../../config/app';
import SplashScreen from 'react-native-splash-screen';

function* startApplicationFlow() {
  yield delay(100);
  try {
    App.navigation.navigate('Home');
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
