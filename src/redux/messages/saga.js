import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_MESSAGES_FULFILLED,
  LOAD_MESSAGE_FULFILLED,
  CREATE_MESSAGE_FULFILLED,
  DESTROY_MESSAGE_FULFILLED,
  UPDATE_MESSAGE_FULFILLED
} from './action'


function* setMessage({ payload: message }) {
  yield put(actions.messages.set(message))
}

function* setMessages({ payload: { data: messages } }) {
  yield put(actions.messages.setMany(messages))
}

function* removeMessage({ meta: { message_id } }) {
  yield put(actions.messages.remove(message_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_MESSAGES_FULFILLED, setMessages),
    takeEvery(LOAD_MESSAGE_FULFILLED, setMessage),
    takeEvery(CREATE_MESSAGE_FULFILLED, setMessage),
    takeEvery(UPDATE_MESSAGE_FULFILLED, setMessage),
    takeEvery(DESTROY_MESSAGE_FULFILLED, removeMessage),
  ])
}
