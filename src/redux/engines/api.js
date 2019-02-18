import { put } from 'redux-saga/effects'

function * api({ type, callable }) {
  try {
    const data = yield callable
    yield put({
      type: type + '_FULFILLED',
      payload: data,
    })
  } catch (error) {
    yield put({
      type: type + '_REJECTED',
      payload: error,
    })
  }
}

export default api
