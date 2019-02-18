import { all, call, put, takeEvery, } from 'redux-saga/effects'
import Auth from 'src/api/Auth'
import actions, { LOGIN_USER, REGISTER_USER } from './action'

function* register({ payload }) {
  yield call(actions.register, payload)
  try {
    const data = yield call(Auth.register, payload)
    yield put(actions.registerSuccess(data))
  } catch (e) {
    yield put(actions.registerError(e))
  }
}

function* login({ payload }) {
  yield call(actions.register, payload)
  try {
    const data = yield call(Auth.login, payload)
    yield put(actions.loginSuccess(data))
  } catch (e) {
    yield put(actions.loginError(e))
  }
}

export default function* auth() {
  yield all([
    takeEvery(REGISTER_USER, register),
    takeEvery(LOGIN_USER, login),
  ])
}
