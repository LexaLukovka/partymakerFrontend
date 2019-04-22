import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_ROOMS_FULFILLED,
  LOAD_ROOM_FULFILLED,
  CREATE_ROOM_FULFILLED,
  DESTROY_ROOM_FULFILLED,
  UPDATE_ROOM_FULFILLED,
  LOAD_ROOM_GUESTS_FULFILLED,
  LOAD_ROOM_MESSAGES_FULFILLED
} from './action'

const createRoom = room => ({
  ...room,
  guests_ids: [],
  messages_ids: []
})

function* setRoom({ payload: room }) {
  yield put(actions.rooms.set(createRoom(room)))
}

function* setRooms({ payload: { data: rooms } }) {
  yield put(actions.rooms.setMany(rooms.map(createRoom)))
}

function* removeRoom({ meta: { room_id } }) {
  yield put(actions.rooms.remove(room_id))
}

function* addRoomGuests({ payload: users, meta: { room_id } }) {
  yield put(actions.users.setMany(users))
  yield put(actions.rooms.setGuests(room_id, users.map(u => u.id)))
}

function* addRoomMessages({ payload, meta: { room_id } }) {

  const { data: messages, total, page } = payload

  yield put(actions.rooms.status({ messages: { page, total } }))
  yield put(actions.messages.setMany(messages))
  yield put(actions.rooms.setMessages(room_id, messages.map(m => m.id)))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_ROOMS_FULFILLED, setRooms),
    takeEvery(LOAD_ROOM_FULFILLED, setRoom),
    takeEvery(CREATE_ROOM_FULFILLED, setRoom),
    takeEvery(UPDATE_ROOM_FULFILLED, setRoom),
    takeEvery(DESTROY_ROOM_FULFILLED, removeRoom),
    takeEvery(LOAD_ROOM_GUESTS_FULFILLED, addRoomGuests),
    takeEvery(LOAD_ROOM_MESSAGES_FULFILLED, addRoomMessages),
  ])
}
