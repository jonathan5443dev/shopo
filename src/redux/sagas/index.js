import {all} from 'redux-saga/effects';
import startAppFlow from './start-app';

export default function* rootSaga() {
  yield all([startAppFlow()]);
}
