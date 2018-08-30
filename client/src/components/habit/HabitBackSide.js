// @flow

import React from 'react'
import './styles/habitBackSide.scss'

type Props = {
  repeatCompletedCount: number,
  lastRepetitionTime: string,
  changeHabitSide: () => void,
}

const HabitBackSide = ({ repeatCompletedCount, lastRepetitionTime, changeHabitSide }: Props) => (
  <div className="habit-back-side" onClick={changeHabitSide}>
    <span>Выполнено повторений: { repeatCompletedCount }</span>
    <span>Последнее в: { lastRepetitionTime }</span>
  </div>
)

export default HabitBackSide
