import { all } from 'redux-saga/effects'
import initSaga from 'modules/welcome/sagas'

export default function* rootSaga () {
  yield all([
    initSaga,
  ])
}
