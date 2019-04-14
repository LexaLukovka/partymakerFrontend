import { all, fork } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import saga from 'app/auth/saga'

export default function* rootSaga() {
  yield all([
    fork(saga),
  ])
}
