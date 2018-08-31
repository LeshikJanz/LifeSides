import { createAction } from "utils/createAction"

export const createLifesideRequested = createAction('CREATE_LIFESIDE_REQUESTED')
export const createLifesideSucceeded = createAction('CREATE_LIFESIDE_SUCCEEDED')
export const createLifesideFailed = createAction('CREATE_LIFESIDE_FAILED')

export const fetchLifesidesRequested = createAction('FETCH_LIFESIDES_REQUESTED')
export const fetchLifesidesSucceeded = createAction('FETCH_LIFESIDES_SUCCEEDED')
export const fetchLifesidesFailed = createAction('FETCH_LIFESIDES_FAILED')

export const selectLifeside = createAction('SELECT_LIFESIDE')
