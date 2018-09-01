// @flow

import React from 'react'
import Habit from 'components/habit/Habit'
import '../styles/habitContainer.scss'
import { connect } from 'react-redux'
import { selectLifesideRequested } from 'components/popups/createLifeside/actions'

type Props = {
  lifesideId: string,
  habits: Habit[],
  selectLifesideRequested: () => void,
}

class HabitContainer extends React.Component<Props> {
  render() {
    const { habits, lifesideId, selectLifesideRequested } = this.props
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
          habits.map(habit =>
            <Habit
              key={habit.id}
              {...habit}
              lifesideId={lifesideId}
              selectLifesideRequested={selectLifesideRequested}
            />)
        }
      </div>
    )
  }
}

export default connect(({ lifeside }) => ({
  lifesideId: lifeside.selected && lifeside.selected.id,
  habits: (lifeside.selected && lifeside.selected.habits
    && lifeside.selected.habits.filter(habit => !habit.isCompleted)) || [],
}), ({ selectLifesideRequested }))(HabitContainer)
