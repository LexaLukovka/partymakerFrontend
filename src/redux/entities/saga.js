import { all, fork } from 'redux-saga/effects'
import users from './users/saga'
import rooms from './rooms/saga'

export default function* rootSaga() {
  yield all([
    fork(users),
    fork(rooms),
  ])
}
