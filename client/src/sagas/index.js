import { all } from 'redux-saga/effects'
import { lifesideSaga } from './lifeside'

export default function* rootSaga () {
  yield all([
    lifesideSaga(),
  ])
}
