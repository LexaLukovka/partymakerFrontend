import { all, call, put, takeEvery, } from 'redux-saga/effects'
import Auth from 'src/api/Auth'
import actions, { REGISTER_USER } from './action'

function* register({ payload }) {
  yield call(actions.register, payload)
  try {
    const data = yield call(Auth.register, payload)
    yield put(actions.registerSuccess(data))
  } catch (e) {
    yield put(actions.registerError(e))
  }
}

export default function* auth() {
  yield all([
    takeEvery(REGISTER_USER, register),
  ])
}
