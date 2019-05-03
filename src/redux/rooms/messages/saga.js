import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import { LOAD_ROOM_MESSAGES_FULFILLED, CREATE_ROOM_MESSAGE_PENDING, CREATE_ROOM_MESSAGE_FULFILLED } from './action'
import moment from 'moment'

const createMessage = m => ({
  ...m,
  asset: undefined,
})

const createTempMessage = (room_id, form) => ({
  id: form.token,
  text: form.text,
  user_id: form.user_id,
  asset_id: null,
  place_id: null,
  room_id: room_id,
  isLoading: true,
  updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  created_at: moment().format('YYYY-MM-DD HH:mm:ss')
})

function* setMessage({ payload }) {
  const message = createMessage(payload)
  const asset = payload.asset

  if (asset) yield put(actions.assets.set(asset))

  yield put(actions.messages.remove(message.token))
  yield put(actions.messages.set(message))
}

function* setTempMessage({ meta: { room_id, form } }) {
  const tempMessage = createTempMessage(room_id, form)

  yield put(actions.messages.set(tempMessage))
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
    takeEvery(CREATE_ROOM_MESSAGE_PENDING, setTempMessage),
    takeEvery(CREATE_ROOM_MESSAGE_FULFILLED, setMessage),
  ])
}
