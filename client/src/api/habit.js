// @flow

import type { Habit } from '../types/Habit'
import { request } from './base'

export default {
  createHabit (habit: Habit, lifesideId: string) {
    return request.post(`Lifesides/${lifesideId}/Habits`, habit)
      .then((habit: Habit) => habit)
  },
}
