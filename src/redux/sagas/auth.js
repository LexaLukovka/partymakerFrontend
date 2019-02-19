import { all, call, put, takeEvery } from 'redux-saga/effects'
import api from 'engines/api'
import Auth from 'api/Auth'
import actions from 'app/actions'
import { LOGIN_FACEBOOK_USER, LOGIN_GOOGLE_USER, LOGIN_USER, REGISTER_USER, } from 'app/auth/action'

function* authentication(auth, { type, payload }) {
  console.log(payload)
  yield call(actions.auth[auth], payload)

  try {
    const data = yield api({
      type,
      callable: call(Auth[auth], payload),
    })

    try {
      yield put(actions.entities.users.add(data))
    } catch (e) {
      console.log(e) // TODO: исправить console.log на что-то другое
    }
  } catch (error) {
    yield put({
      type: type + '_REJECTED',
      payload: error,
    })
  }
}

export default function* auth() {
  yield all([
    takeEvery(LOGIN_USER, authentication, 'login'),
    takeEvery(REGISTER_USER, authentication, 'register'),
    takeEvery(LOGIN_GOOGLE_USER, authentication, 'google'),
    takeEvery(LOGIN_FACEBOOK_USER, authentication, 'facebook'),
  ])
}
