import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_PLACES_FULFILLED,
  LOAD_PLACE_FULFILLED,
  CREATE_PLACE_FULFILLED,
  DESTROY_PLACE_FULFILLED,
  UPDATE_PLACE_FULFILLED
} from './action'

function* setPlace({ payload: place }) {
  yield put(actions.places.set(place))
}

function* setPlaces({ payload: { data: places } }) {
  yield put(actions.places.setMany(places))
}

function* removePlace({ meta: { place_id } }) {
  yield put(actions.places.remove(place_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_PLACES_FULFILLED, setPlaces),
    takeEvery(LOAD_PLACE_FULFILLED, setPlace),
    takeEvery(CREATE_PLACE_FULFILLED, setPlace),
    takeEvery(UPDATE_PLACE_FULFILLED, setPlace),
    takeEvery(DESTROY_PLACE_FULFILLED, removePlace),
  ])
}
