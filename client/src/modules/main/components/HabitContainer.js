// @flow

import React from 'react'
import Habit from 'components/habit/Habit'
import '../styles/habitContainer.scss'
import { connect } from 'react-redux'

type Props = {
  habits: Habit[],
}

class HabitContainer extends React.Component<Props> {
  render () {
    const { habits } = this.props
    if (!habits.length) {
      return (
        <div className="habit-empty-container">
          <h3>
            Еще не создана ни одна привычка. <br /><br />
            Давай же займемся этим!
          </h3>
        </div>
      )
    }
    return (
      <div className="habit-container">
        {
          habits.map(habit => <Habit key={habit.id} {...habit} />)
        }
      </div>
    )
  }
}

export default connect(({ lifeside }) => ({
  habits: (lifeside.selected && lifeside.selected.habits) || [],
}))(HabitContainer)
