import {takeLatest, delay} from 'redux-saga/effects';
import App from '../../config/app';

function* startRecoveryPasswordCallback() {
  yield delay(100);
  try {
    App.navigation.navigate('RecoveryPassword');
  } catch (e) {
    App.navigation.navigate('RecoveryPassword');
  }
}

function* startRecoveryPasswordFlow() {
  yield takeLatest(
    'START_RECOVERY_PASSWORD_FLOW',
    startRecoveryPasswordCallback,
  );
}

export default startRecoveryPasswordFlow;
