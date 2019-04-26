import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_MESSAGES_FULFILLED,
  LOAD_MESSAGE_FULFILLED,
  CREATE_MESSAGE_FULFILLED,
} from './action'

function* setMessage({ payload: message }) {
  yield put(actions.messages.set(message))
}

function* addMessages({ payload }) {
  const { data: messages, total, page } = payload

  yield put(actions.rooms.status({ messages: { page, total } }))
  yield put(actions.messages.setMany(messages))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_MESSAGES_FULFILLED, addMessages),
    takeEvery(LOAD_MESSAGE_FULFILLED, setMessage),
    takeEvery(CREATE_MESSAGE_FULFILLED, setMessage),
  ])
}
