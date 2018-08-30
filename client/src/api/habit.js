// @flow

import type { Habit } from '../types/Habit'
import { request } from './base'
import type { Account } from 'types/Account'

export default {
  createHabit (habit: Habit) {
    return request.post('Habits', habit)
      .then((habit: Habit) => habit)
  },
}
