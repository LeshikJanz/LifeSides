// @flow

import type { Habit } from '../types/Habit'
import { request } from './base'

export default {
  createHabit (habit: Habit) {
    return request.post('Habits', habit)
      .then((habit: Habit) => habit)
  },
}
