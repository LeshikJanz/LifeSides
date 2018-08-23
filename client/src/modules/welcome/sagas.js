import { all, takeLatest } from 'redux-saga/effects'
import { init } from './actions'

export function* initSaga (): Generator<*, *, *> {
  try {
    console.log("SAGA WORKS")
  } catch (err) {
  }
}

export default all([
  takeLatest(init().type, initSaga),
])
