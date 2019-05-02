import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import { LOAD_ROOM_MESSAGES_FULFILLED, CREATE_ROOM_MESSAGE_FULFILLED } from './action'

const createMessage = m => ({
  ...m,
  asset: undefined,
})

function* setMessage({ payload }) {
  const message = createMessage(payload)
  const asset = payload.asset

  if (asset) yield put(actions.assets.set(asset))
  yield put(actions.messages.set(message))
}

function* addMessages({ payload: { data, total, page } }) {

  const messages = data.map(createMessage)
  const assets = data.map(m => m.asset).filter(a => !!a)

  yield put(actions.messages.setMany(messages))
  yield put(actions.assets.setMany(assets))
  yield put(actions.rooms.status({ messages: { page, total } }))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_ROOM_MESSAGES_FULFILLED, addMessages),
    takeEvery(CREATE_ROOM_MESSAGE_FULFILLED, setMessage),
  ])
}
