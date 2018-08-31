import type { Lifeside } from 'types/Lifeside'
import { put, takeLatest } from 'redux-saga/effects'
import api from 'api/lifeside'
import {
  fetchLifesidesRequested,
  fetchLifesidesSucceeded,
  fetchLifesidesFailed,
  selectLifeside,
} from 'components/popups/createLifeside/actions'

export function* fetchLifesidesSaga () {
  try {
    const lifesides = yield api.fetchLifesides()
    if (lifesides && lifesides[0]) {
      const prevSelectedLifesideId = localStorage.getItem("prevSelectedLifesideId")
      const nextLifeside = lifesides.find(lifeside => lifeside.id === prevSelectedLifesideId)
        || lifesides[0]
      yield put(selectLifeside(nextLifeside))
    }
    yield put(fetchLifesidesSucceeded(lifesides))
  } catch (error) {
    yield put(fetchLifesidesFailed(error))
  }
}

export function* lifesideSaga () {
  yield takeLatest(fetchLifesidesRequested, fetchLifesidesSaga)
}
