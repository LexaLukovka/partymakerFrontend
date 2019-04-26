import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import { LOAD_GUESTS_FULFILLED } from './action'

function* addGuests({ payload: users, meta: { room_id } }) {
  yield put(actions.users.setMany(users))
  yield put(actions.rooms.setGuests(room_id, users.map(u => u.id)))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_GUESTS_FULFILLED, addGuests),
  ])
}
