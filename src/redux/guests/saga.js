import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import { KICK_GUEST_FULFILLED, LOAD_GUESTS_FULFILLED } from './action'

function* addGuests({ payload: users, meta: { room_id } }) {
  yield put(actions.users.setMany(users))
  yield put(actions.rooms.setGuests(room_id, users.map(u => u.id)))
}

function* removeGuest({ meta: { room_id, user_id } }) {
  yield put(actions.rooms.removeGuest(room_id, user_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_GUESTS_FULFILLED, addGuests),
    takeEvery(KICK_GUEST_FULFILLED, removeGuest),
  ])
}
