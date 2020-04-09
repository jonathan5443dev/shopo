import {takeLatest, delay} from 'redux-saga/effects';
import App from '../../config/app';

function* startSingUpCallback() {
  yield delay(100);
  try {
    App.navigation.navigate('SingUp');
  } catch (e) {
    App.navigation.navigate('SingUp');
  }
}

function* startSingUpFlow() {
  yield takeLatest('startSingUpFlow', startSingUpCallback);
}

export default startSingUpFlow;
