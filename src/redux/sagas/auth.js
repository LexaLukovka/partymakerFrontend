import { all, call, put, takeEvery } from 'redux-saga/effects'
import api from 'engines/api'
import Auth from 'api/Auth'
import actions from 'app/actions'
import {
  ACTIVATE_USER,
  FORGOT_PASSWORD,
  LOGIN_FACEBOOK_USER,
  LOGIN_GOOGLE_USER,
  LOGIN_USER,
  REGISTER_USER,
  RESTOR_PASSWORD,
} from 'app/auth/action'
import authUser from 'src/redux/selectors/authUser'
import store from 'src/redux/store'

function* authentication({ authorization, usersAction, message }, { type, payload }) {
  yield call(actions.auth[authorization], payload)

  try {
    const data = yield api({
      type,
      callable: call(Auth[authorization], payload),
    })

    try {
      if (message) {
        yield put(actions.ui.alert.show(message))
      }

      if (usersAction) {
        yield put(actions.entities.users[usersAction](usersAction === 'activate' ? authUser(store.getState()).id : data))
      }
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
    takeEvery(LOGIN_USER, authentication, ({ authorization: 'login', usersAction: 'add' })),
    takeEvery(REGISTER_USER, authentication, ({
      authorization: 'register',
      usersAction: 'add',
      message: 'Для активации, пройдите на почту'
    })),
    takeEvery(LOGIN_GOOGLE_USER, authentication, ({ authorization: 'google', usersAction: 'add' })),
    takeEvery(LOGIN_FACEBOOK_USER, authentication, ({ authorization: 'facebook', usersAction: 'add' })),
    takeEvery(ACTIVATE_USER, authentication, ({ authorization: 'activate', usersAction: 'activate' })),
    takeEvery(RESTOR_PASSWORD, authentication, ({ authorization: 'restorePassword', usersAction: 'add' })),
    takeEvery(FORGOT_PASSWORD, authentication, ({ authorization: 'forgotPassword' })),
  ])
}
