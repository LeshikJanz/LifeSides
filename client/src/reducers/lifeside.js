// @flow

import type { Lifeside } from 'types/Lifeside'
import { createReducer } from 'utils/createReducer'
import {
  fetchLifesidesRequested,
  fetchLifesidesSucceeded,
  fetchLifesidesFailed,
  selectLifeside,
} from 'components/popups/createLifeside/actions'

const initialState = {
  list: [],
  selected: null,
  loading: false,
};

export default createReducer({
  [fetchLifesidesRequested]: () => ({ ...initialState, loading: true }),
  [fetchLifesidesSucceeded]: (state: any, payload: Lifeside[]) => ({
    ...state,
    list: payload,
    loading: false,
  }),
  [fetchLifesidesFailed]: (state: any, error: Error) => ({
    ...state,
    error,
    loading: false,
  }),
  [selectLifeside]: (state: any, payload: Lifeside) => {
    if (payload && payload.id) {
      localStorage.setItem("prevSelectedLifesideId", payload.id)
    }
    return ({
      ...state,
      selected: payload,
    })
  }
}, initialState);
