import { createAction } from "utils/createAction"

export const createHabitRequested = createAction('CREATE_HABIT_REQUESTED')
export const createHabitSucceeded = createAction('CREATE_HABIT_SUCCEEDED')
export const createHabitFailed = createAction('CREATE_HABIT_FAILED')

export const fetchHabitRequested = createAction('FETCH_HABIT_REQUESTED')
export const fetchHabitSucceeded = createAction('FETCH_HABIT_SUCCEEDED')
export const fetchHabitFailed = createAction('FETCH_HABIT_FAILED')
