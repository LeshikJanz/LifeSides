// @flow

import React from 'react'
import ReactSVG from 'react-svg'
import confirmHabitIcon from 'assets/svg/confirm-habit.svg'
import './styles/habit.scss'
import HabitBackSide from './HabitBackSide'

type Props = {
  text: string,
  repeatCompletedCount: number,
  repeatCount: number,
}

type State = {
  habitFrontSide: boolean,
}

class Habit extends React.Component<Props, State> {
  state = {
    habitFrontSide: true,
  }

  changeHabitSide = () =>
    this.setState(prevState => ({ habitFrontSide: !prevState.habitFrontSide }))

  render() {
    const { text, repeatCompletedCount, repeatCount } = this.props
    if (!this.state.habitFrontSide) {
      return (
        <HabitBackSide
          repeatCompletedCount={repeatCompletedCount}
          lastRepetitionTime="12.04.2018 17:34"
          changeHabitSide={this.changeHabitSide}
        />)
    }
    return (
      <div className="habit-wrapper">
        <div className="habit-text-block" onClick={this.changeHabitSide}>
          {text}
        </div>
        <div className="habit-actions">
          <ReactSVG
            className="confirm-button"
            src={confirmHabitIcon}
          />
          <div className="habit-progress">
            {repeatCompletedCount} / {repeatCount}
          </div>
        </div>
      </div>
    )
  }
}

export default Habit