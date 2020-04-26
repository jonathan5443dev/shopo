import {takeLatest} from 'redux-saga/effects';
import App from '../../config/app';

function* startProfileSettingsCallback() {
  try {
    App.navigation.navigate('ProfileSettings');
  } catch (e) {
    throw new Error(e);
  }
}

function* profileSettingsFlows() {
  yield takeLatest('START_PROFILE_SETTINGS_FLOW', startProfileSettingsCallback);
}

export default profileSettingsFlows;
