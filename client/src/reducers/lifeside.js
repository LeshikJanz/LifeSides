// @flow

import type { Lifeside } from 'types/Lifeside'
import { createReducer } from 'utils/createReducer'
import {
  fetchLifesidesRequested,
  fetchLifesidesSucceeded,
  fetchLifesidesFailed,
  selectLifesideRequested,
  selectLifesideSucceeded,
  selectLifesideFailed,
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
  [selectLifesideRequested]: (state: any, payload: string) => {
    localStorage.setItem("prevSelectedLifesideId", payload)
    return ({ ...state, loading: true })
  },
  [selectLifesideSucceeded]: (state: any, payload: Lifeside) => ({
    ...state,
    selected: payload,
    loading: false,
  }),
  [selectLifesideFailed]: (state: any, error: Error) => ({
    ...state,
    error,
    loading: false,
  }),
}, initialState);
