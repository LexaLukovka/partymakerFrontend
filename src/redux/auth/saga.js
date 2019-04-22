import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'
import Auth from 'services/Auth'

import {
  ACTIVATE_USER_FULFILLED,
  LOGIN_FACEBOOK_USER_FULFILLED,
  LOGIN_GOOGLE_USER_FULFILLED,
  LOGIN_USER_FULFILLED,
  REGISTER_USER_FULFILLED,
  RESET_PASSWORD_FULFILLED,
} from 'src/redux/auth/action'

function* setAuthUser({ payload: { token } }) {
  const user = Auth.user(token)

  yield put(actions.users.set(user))
  yield put(actions.auth.setCurrentUser(user))
}

export default function* saga() {
  yield all([
    takeEvery(LOGIN_USER_FULFILLED, setAuthUser),
    takeEvery(REGISTER_USER_FULFILLED, setAuthUser),
    takeEvery(LOGIN_GOOGLE_USER_FULFILLED, setAuthUser),
    takeEvery(LOGIN_FACEBOOK_USER_FULFILLED, setAuthUser),
    takeEvery(RESET_PASSWORD_FULFILLED, setAuthUser),
    takeEvery(ACTIVATE_USER_FULFILLED, setAuthUser,),
  ])
}
