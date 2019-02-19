import { put } from 'redux-saga/effects'

function* api({ type, callable }) {
  const data = yield callable
  try {
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

  return data
}

export default api
