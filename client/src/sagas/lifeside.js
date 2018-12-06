import { put, takeLatest } from "redux-saga/effects";
import api from "api/lifeside";
import {
  fetchLifesidesRequested,
  fetchLifesidesSucceeded,
  fetchLifesidesFailed,
  selectLifesideRequested,
  selectLifesideSucceeded,
  selectLifesideFailed
} from "components/popups/createLifeside/actions";

export function* fetchLifesidesSaga() {
  try {
    const lifesides = yield api.fetchLifesides();
    if (lifesides && lifesides[0]) {
      const prevSelectedLifesideId = localStorage.getItem(
        "prevSelectedLifesideId"
      );
      yield put(
        selectLifesideRequested(
          !!prevSelectedLifesideId ? prevSelectedLifesideId : lifesides[0].id
        )
      );
    }
    yield put(fetchLifesidesSucceeded(lifesides));
  } catch (error) {
    yield put(fetchLifesidesFailed(error));
  }
}

export function* selectLifesideSaga({ payload }: { payload: string }) {
  try {
    const lifeside = yield api.fetchLifesideById(payload);
    yield put(selectLifesideSucceeded(lifeside));
  } catch (error) {
    yield put(selectLifesideFailed(error));
  }
}

export function* lifesideSaga() {
  yield takeLatest(fetchLifesidesRequested, fetchLifesidesSaga);
  yield takeLatest(selectLifesideRequested, selectLifesideSaga);
}
