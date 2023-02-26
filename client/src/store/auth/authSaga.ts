//Saga para  la autorización

import { takeEvery, put, select } from 'redux-saga/effects';

import { loginSuccess, loginFailed, loginRequest } from './authSlicer';
import { postLogin } from '../../services/AuthServices';

export function* login() {
  try {
    const emailUser: string = yield select((state) => state.reducer.auth.email);
    const passwordUser: string = yield select(
      (state) => state.reducer.auth.password
    );

    const result: string = yield postLogin({
      email: emailUser,
      password: passwordUser,
    });

    yield put(loginSuccess(result));
  } catch (e) {
      console.log('error', e);
      yield put(loginFailed('Usuario incorrecto'));
  }
}
export default function* loginSaga() {
  
  yield takeEvery(loginRequest.type, login);
}

export {};
