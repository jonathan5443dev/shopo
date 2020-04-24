import {takeLatest, call, put} from 'redux-saga/effects';
import LoginActions from '../reducers/login';
import App from '../../config/app';
import UserActions from '../reducers/user';

function* AuthenticateUser(action) {
  try {
    // call login service
    const authentication = yield call(
      () =>
        new Promise((resolve, reject) =>
          resolve({success: true, error: '', auth_token: 'perrito'}),
        ),
    );
    if (authentication.success) {
      // call get profile service
      const userProfile = yield call(
        () =>
          new Promise((resolve, reject) =>
            resolve({
              name: 'John',
              last_name: 'Doeh Magic',
              email: 'john.doeh@magic.com',
              phone_number: '3194926244',
            }),
          ),
      );
      yield put(UserActions.setUserData(...Object.values(userProfile)));
      yield put(UserActions.setUserAuthentication(authentication.auth_token));
      yield put(LoginActions.loginSuccess());
      App.navigation.navigate('Home');
    } else {
      LoginActions.loginFailed(authentication.error);
    }
  } catch (e) {
    LoginActions.loginFailed(e);
  }
}

function* authenticateUserFlow() {
  yield takeLatest('AUTHENTICATE_USER', AuthenticateUser);
}

export default authenticateUserFlow;
