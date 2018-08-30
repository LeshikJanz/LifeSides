// @flow

export type Habit = {
  id: string,
  name: string,
  repeatCount: number,
  repeatDelay?: string,
  repeatProgress?: number,
  creationDate?: string,
  lastRepetitionDate?: number,
}

