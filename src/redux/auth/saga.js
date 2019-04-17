import actions from 'src/redux/action'
import store from 'src/redux/store'
import authUser from 'src/redux/selectors/currentUser'
import { all, put, takeEvery } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {
  ACTIVATE_USER_FULFILLED,
  LOGIN_FACEBOOK_USER_FULFILLED,
  LOGIN_GOOGLE_USER_FULFILLED,
  LOGIN_USER_FULFILLED,
  REGISTER_USER_FULFILLED,
  RESTOR_PASSWORD_FULFILLED,
} from 'src/redux/auth/action'

function* addUser({ payload }) {
  yield put(actions.entities.users.add(payload))
}

function* activateUser() {
  yield put(actions.entities.users.activate(authUser(store.getState()).id))
}

export default function* saga() {
  yield all([
    takeEvery(LOGIN_USER_FULFILLED, addUser),
    takeEvery(REGISTER_USER_FULFILLED, addUser),
    takeEvery(LOGIN_GOOGLE_USER_FULFILLED, addUser),
    takeEvery(LOGIN_FACEBOOK_USER_FULFILLED, addUser),
    takeEvery(RESTOR_PASSWORD_FULFILLED, addUser),
    takeEvery(ACTIVATE_USER_FULFILLED, activateUser,),
  ])
}
