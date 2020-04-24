import {all} from 'redux-saga/effects';
import startAppFlow from './start-app';
import loginFlows from './login';

export default function* rootSaga() {
  yield all([startAppFlow(), loginFlows()]);
}
