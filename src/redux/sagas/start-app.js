import {takeLatest, select, delay, put} from 'redux-saga/effects';
import App from '../../config/app';
import SplashScreen from 'react-native-splash-screen';
import HomeActions from '../reducers/home';
export const getAuthentication = state => state.user.authentication;

function* startApplicationFlow() {
  yield delay(100);
  try {
    const authentication = yield select(getAuthentication);
    if (authentication !== '') {
      yield put(HomeActions.startHomeFlow());
    } else {
      App.navigation.navigate('Login');
    }
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
