// @flow

import type { Habit } from '../types/Habit'
import { request } from './base'
import handleError from 'utils/handleError'

export default {
  createHabit (habit: Habit, lifesideId: string) {
    return request.post(`Lifesides/${lifesideId}/Habits`, habit)
      .then((habit: Habit) => habit)
  },
  completeHabit (habitId: string) {
    return request.post(`Habits/completeOneTime`, { habitId })
      .then((habit: Habit) => habit)
      .catch(handleError)
  },
}
