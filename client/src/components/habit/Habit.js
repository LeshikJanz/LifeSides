// @flow
import { Habit as HabitType } from 'types/Habit'
import React from 'react'
import ReactSVG from 'react-svg'
import api from 'api/habit'
import confirmHabitIcon from 'assets/svg/confirm-habit.svg'
import { NotificationManager } from 'react-notifications'
import './styles/habit.scss'
import HabitBackSide from './HabitBackSide'
import { NOTIFICATION_TIMEOUT, HABIT_COMPLETE_TIMEOUT } from 'constants/common'
import HabitProgress from './HabitProgress'

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

  completeOneTime = () => {
    api.completeHabit(this.props.id)
      .then(() => {
        NotificationManager.success(`Привычка ${this.props.name} выполнена!`,
          'Супер! На шаг ближе.', NOTIFICATION_TIMEOUT)
        this.props.selectLifesideRequested(this.props.lifesideId)
      })
  }

  render () {
    const {
      name, repeatProgress = 0,
      repeatCount, lastRepetitionDate,
    } = this.props
    const isRepetitionAvailable =
      new Date().getTime() - new Date(lastRepetitionDate).getTime() > HABIT_COMPLETE_TIMEOUT
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
        <div className="habit-actions">
          <ReactSVG
            disabled={lastRepetitionDate && !isRepetitionAvailable}
            className="confirm-button"
            src={confirmHabitIcon}
            onClick={this.completeOneTime}
          />
          <HabitProgress
            isRepetitionAvailable={isRepetitionAvailable}
            lastRepetitionDate={lastRepetitionDate}
            repeatProgress={repeatProgress}
            repeatCount={repeatCount}
          />
        </div>
      </div>
    )
  }
}

export default Habit
