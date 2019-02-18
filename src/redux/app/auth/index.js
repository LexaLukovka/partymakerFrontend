import { all, call, takeEvery, } from 'redux-saga/effects'
import api from 'src/redux/engines/api'
import Auth from 'src/api/Auth'
import actions, { LOGIN_USER, REGISTER_USER } from './action'

function * register({ payload }) {
  yield call(actions.register, payload)

  yield api({
    type: REGISTER_USER,
    callable: call(Auth.register, payload)
  })
}

function * login({ payload }) {
  yield call(actions.register, payload)

  yield api({
    type: LOGIN_USER,
    callable: call(Auth.login, payload)
  })
}

export default function * auth() {
  yield all([
    takeEvery(REGISTER_USER, register),
    takeEvery(LOGIN_USER, login),
  ])
}
