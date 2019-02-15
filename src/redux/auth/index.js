import { all, call, put, takeEvery, } from 'redux-saga/effects'
import Auth from 'src/api/Auth'
import actions, { REGISTER_USER } from './action'

function* register({ payload }) {
  console.log(1)
  yield call(actions.register, payload)
  try {
    console.log(payload)
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
