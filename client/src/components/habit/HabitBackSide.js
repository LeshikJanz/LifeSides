// @flow

import React from 'react'
import './styles/habitBackSide.scss'

type Props = {
  repeatProgress: number,
  lastRepetitionTime: string,
  changeHabitSide: () => void,
}

const HabitBackSide = ({ repeatProgress, lastRepetitionDate, changeHabitSide }: Props) => (
  <div className="habit-wrapper habit-back-side" onClick={changeHabitSide}>
    <span>Выполнено повторений: { repeatProgress }</span>
    {
      lastRepetitionDate &&
      <span>Последнее в: { lastRepetitionDate }</span>
    }
  </div>
)

export default HabitBackSide
