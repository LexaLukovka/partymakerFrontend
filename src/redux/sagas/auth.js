import { all, call, put, takeEvery } from 'redux-saga/effects'
import api from 'engines/api'
import Auth from 'api/Auth'
import actions from 'app/actions'
import { ACTIVATE_USER, LOGIN_FACEBOOK_USER, LOGIN_GOOGLE_USER, LOGIN_USER, REGISTER_USER, } from 'app/auth/action'
import authUser from 'src/redux/selectors/authUser'
import store from 'src/redux/store'

function* authentication({ authorization, usersAction }, { type, payload }) {
  yield call(actions.auth[authorization], payload)

  try {
    const data = yield api({
      type,
      callable: call(Auth[authorization], payload),
    })

    try {
      yield put(actions.entities.users[usersAction || 'add'](usersAction ? authUser(store.getState()).id : data))
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
    takeEvery(LOGIN_USER, authentication, ({ authorization: 'login' })),
    takeEvery(REGISTER_USER, authentication, ({ authorization: 'register' })),
    takeEvery(LOGIN_GOOGLE_USER, authentication, ({ authorization: 'google' })),
    takeEvery(LOGIN_FACEBOOK_USER, authentication, ({ authorization: 'facebook' })),
    takeEvery(ACTIVATE_USER, authentication, ({ authorization: 'activate', usersAction: 'activate' })),
  ])
}
