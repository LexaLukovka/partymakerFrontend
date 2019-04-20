import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_ROOMS_FULFILLED,
  LOAD_ROOM_FULFILLED,
  CREATE_ROOM_FULFILLED,
  DESTROY_ROOM_FULFILLED,
  UPDATE_ROOM_FULFILLED
} from './action'

function* setRoom({ payload: room }) {
  yield put(actions.entities.rooms.set(room))
}

function* setRooms({ payload: { data: rooms } }) {
  yield put(actions.entities.rooms.setMany(rooms))
}

function* removeRoom({ meta: { room_id } }) {
  yield put(actions.entities.rooms.remove(room_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_ROOMS_FULFILLED, setRooms),
    takeEvery(LOAD_ROOM_FULFILLED, setRoom),
    takeEvery(CREATE_ROOM_FULFILLED, setRoom),
    takeEvery(UPDATE_ROOM_FULFILLED, setRoom),
    takeEvery(DESTROY_ROOM_FULFILLED, removeRoom),
  ])
}
