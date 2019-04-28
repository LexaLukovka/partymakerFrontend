import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_INVITE_FULFILLED,
  CREATE_INVITE_FULFILLED,
  DESTROY_INVITE_FULFILLED,
  UPDATE_INVITE_FULFILLED,
  LOAD_INVITE_BY_TOKEN_FULFILLED,
} from './action'

function* setInvite({ payload: invite, meta: { room_id } }) {
  if (!invite) return null
  yield put(actions.rooms.setInvite(room_id, invite.id))
  yield put(actions.invites.set(invite))
}

function* setInviteFromToken({ payload: invite }) {
  yield put(actions.invites.setCurrent(invite.id))
  yield put(actions.invites.set(invite))
}

function* removeInvite({ meta: { invite_id } }) {
  yield put(actions.invites.remove(invite_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_INVITE_FULFILLED, setInvite),
    takeEvery(LOAD_INVITE_BY_TOKEN_FULFILLED, setInviteFromToken),
    takeEvery(CREATE_INVITE_FULFILLED, setInvite),
    takeEvery(UPDATE_INVITE_FULFILLED, setInvite),
    takeEvery(DESTROY_INVITE_FULFILLED, removeInvite),
  ])
}
