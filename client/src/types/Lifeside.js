// @flow

import type { Habit } from './Habit'

export type Lifeside = {
  id: string,
  name: string,
  description?: string,
  flaskColor?: string,
  creationDate?: string,
  habits?: Habit[],
}

