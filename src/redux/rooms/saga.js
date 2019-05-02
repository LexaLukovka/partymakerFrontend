import { all, put, takeEvery, fork } from 'redux-saga/effects'
import actions from 'src/redux/action'
import guests from './guests/saga'
import place from './place/saga'
import invite from './invite/saga'

import {
  LOAD_ROOMS_FULFILLED,
  LOAD_ROOM_FULFILLED,
  CREATE_ROOM_FULFILLED,
  LEAVE_ROOM_FULFILLED,
  UPDATE_ROOM_FULFILLED,
} from './action'

const createRoom = room => ({
  ...room,
  guests_ids: [],
})

function* setRoom({ payload: room }) {
  yield put(actions.rooms.current(room.id))
  yield put(actions.rooms.set(createRoom(room)))
}

function* setRooms({ payload: { data: rooms } }) {
  yield put(actions.rooms.setMany(rooms.map(createRoom)))
}

function* removeRoom({ meta: { room_id } }) {
  yield put(actions.rooms.remove(room_id))
}

export default function* saga() {
  yield all([
    fork(guests),
    fork(place),
    fork(invite),
    takeEvery(LOAD_ROOMS_FULFILLED, setRooms),
    takeEvery(LOAD_ROOM_FULFILLED, setRoom),
    takeEvery(CREATE_ROOM_FULFILLED, setRoom),
    takeEvery(UPDATE_ROOM_FULFILLED, setRoom),
    takeEvery(LEAVE_ROOM_FULFILLED, removeRoom),
  ])
}
