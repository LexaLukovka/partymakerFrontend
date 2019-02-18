import { all, call, takeEvery, } from 'redux-saga/effects'
import api from 'src/redux/engines/api'
import Auth from 'src/api/Auth'
import actions, { REGISTER_USER } from './action'

function * register({ payload }) {
  yield call(actions.register, payload)

  yield api({
    type: REGISTER_USER,
    callable: call(Auth.register, payload)
  })
}

export default function * auth() {
  yield all([
    takeEvery(REGISTER_USER, register),
  ])
}
