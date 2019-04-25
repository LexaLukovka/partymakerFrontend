import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_USERS_FULFILLED,
  LOAD_USER_FULFILLED,
  CREATE_USER_FULFILLED,
  DESTROY_USER_FULFILLED,
  UPDATE_USER_FULFILLED
} from './action'

function* setUser({ payload: user }) {

  yield put(actions.users.set(user))
}

function* setUsers({ payload: { data: users } }) {
  yield put(actions.users.setMany(users))
}

function* removeUser({ meta: { user_id } }) {
  yield put(actions.users.remove(user_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_USERS_FULFILLED, setUsers),
    takeEvery(LOAD_USER_FULFILLED, setUser),
    takeEvery(CREATE_USER_FULFILLED, setUser),
    takeEvery(UPDATE_USER_FULFILLED, setUser),
    takeEvery(DESTROY_USER_FULFILLED, removeUser),
  ])
}
