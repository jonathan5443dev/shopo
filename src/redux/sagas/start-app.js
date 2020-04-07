import {takeLatest} from 'redux-saga/effects';
import App from '../../config/app';

function* startApplicationFlow() {
  try {
    App.navigation.navigate('Home');
  } catch (e) {
    App.navigation.navigate('Home');
  }
}

function* startAppFlow() {
  yield takeLatest('START_APP_FLOW', startApplicationFlow);
}

export default startAppFlow;
