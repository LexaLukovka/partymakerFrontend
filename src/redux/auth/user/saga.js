import { all, takeEvery, put } from 'redux-saga/effects'
import { LOAD_AUTH_USER_FULFILLED, UPDATE_AUTH_USER_FULFILLED } from './action'
import actions from 'src/redux/action'

function* setUser({ payload }) {
  yield put(actions.users.set(payload))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_AUTH_USER_FULFILLED, setUser),
    takeEvery(UPDATE_AUTH_USER_FULFILLED, setUser)
  ])
}
