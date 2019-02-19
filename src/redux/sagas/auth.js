import { all, call, put, takeEvery } from 'redux-saga/effects'
import api from 'engines/api'
import Auth from 'api/Auth'
import actions from 'app/actions'
import { LOGIN_USER, REGISTER_USER } from 'app/auth/action'

function* register({ payload }) {
  yield call(actions.auth.register, payload)

  const data = yield api({
    type: REGISTER_USER,
    callable: call(Auth.register, payload),
  })

  yield put(actions.entities.users.add(data))
}

function* login({ payload }) {
  yield call(actions.auth.login, payload)

  const data = yield api({
    type: LOGIN_USER,
    callable: call(Auth.login, payload),
  })

  yield put(actions.entities.users.add(data))
}

export default function* auth() {
  yield all([
    takeEvery(REGISTER_USER, register),
    takeEvery(LOGIN_USER, login),
  ])
}
