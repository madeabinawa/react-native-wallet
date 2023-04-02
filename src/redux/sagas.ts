import {all, fork} from 'redux-saga/effects';
import contactSaga from 'src/screens/Contact/ContactSaga';
import authSaga from 'src/screens/Login/AuthSaga';

export function* rootSaga() {
  yield all([fork(contactSaga), fork(authSaga)]);
}
