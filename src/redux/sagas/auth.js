import { all, put, call, takeEvery } from 'redux-saga/effects'
import api from 'engines/api'
import Auth from 'api/Auth'
import actions from 'app/actions'
import { LOGIN_USER, REGISTER_USER } from 'app/auth/action'

function* register({ payload }) {
  yield call(actions.register, payload)

  yield api({
    type: REGISTER_USER,
    callable: call(Auth.register, payload),
  })

  yield put(actions.entities.users.add(payload))
}

function* login({ payload }) {
  yield call(actions.login, payload)

  yield api({
    type: LOGIN_USER,
    callable: call(Auth.login, payload),
  })

  yield put(actions.entities.users.add(payload))
}

export default function* auth() {
  yield all([
    takeEvery(REGISTER_USER, register),
    takeEvery(LOGIN_USER, login),
  ])
}
