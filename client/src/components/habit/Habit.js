// @flow

import { Habit as HabitType } from 'types/Habit'
import React from 'react'
import api from 'api/habit'
import { NotificationManager } from 'react-notifications'
import './styles/habit.scss'
import HabitBackSide from './HabitBackSide'
import { NOTIFICATION_TIMEOUT } from 'constants/common'
import HabitActions from './HabitActions'

type State = {
  habitFrontSide: boolean,
}

type Props = {
  lifesideId: string,
  selectLifesideRequested: () => void,
} & HabitType

class Habit extends React.Component<Props, State> {
  state = {
    habitFrontSide: true,
  }

  changeHabitSide = () =>
    this.setState(prevState => ({ habitFrontSide: !prevState.habitFrontSide }))

  completeOneTime = () =>
    api.completeHabit(this.props.id)
      .then(() => {
        NotificationManager.success(`Привычка ${this.props.name} выполнена!`,
          'Супер! На шаг ближе.', NOTIFICATION_TIMEOUT)
        this.props.selectLifesideRequested(this.props.lifesideId)
      })

  render() {
    const {
      name, repeatProgress = 0,
      repeatCount, lastRepetitionDate,
    } = this.props
    if (!this.state.habitFrontSide) {
      return (
        <HabitBackSide
          repeatProgress={repeatProgress}
          lastRepetitionDate={lastRepetitionDate}
          changeHabitSide={this.changeHabitSide}
        />)
    }
    return (
      <div className="habit-wrapper">
        <div className="habit-text-block" onClick={this.changeHabitSide}>
          {name}
        </div>
        <HabitActions
          completeOneTime={this.completeOneTime}
          lastRepetitionDate={lastRepetitionDate}
          repeatProgress={repeatProgress}
          repeatCount={repeatCount}
        />
      </div>
    )
  }
}

export default Habit
