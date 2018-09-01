// @flow

import React from 'react'
import moment from 'moment'
import ReactSVG from 'react-svg'
import confirmHabitIcon from 'assets/svg/confirm-habit.svg'
import { HABIT_COMPLETE_TIMEOUT } from 'constants/common'

const INTERVAL_DURATION = 1000

type Props = {
  repeatProgress: number,
  repeatCount: number,
  lastRepetitionDate: string,
  completeOneTime: () => void,
}

type State = {
  isHintShown: boolean,
  leftTime: number,
  isRepetitionAvailable: boolean,
}

class HabitActions extends React.Component<Props, State> {
  state = {
    isHintShown: false,
    leftTime: 0,
    isRepetitionAvailable: true,
  }

  componentDidMount() {
    this.handleRepetition()
    setInterval(this.handleRepetition, INTERVAL_DURATION)
  }

  handleRepetition = () => {
    const isRepetitionAvailable =
      new Date().getTime() - new Date(this.props.lastRepetitionDate).getTime() > HABIT_COMPLETE_TIMEOUT
    if (this.state.isRepetitionAvailable !== isRepetitionAvailable) {
      return this.setState({
        leftTime: this.getFormattedLeftTime(),
        isRepetitionAvailable,
      })
    }
    this.setState({ leftTime: this.getFormattedLeftTime() })
  }

  onHintShow = () => this.setState({ isHintShown: true })

  onHintHide = () => this.setState({ isHintShown: false })

  getFormattedLeftTime = () => {
    const leftTime = moment.duration(
      new Date().getTime() - new Date(this.props.lastRepetitionDate).getTime(), "milliseconds")
    const days = leftTime.days() ? `${leftTime.days()}д ` : ""
    const hours = leftTime.hours() ? `${leftTime.hours()}ч ` : ""
    const minutes = leftTime.minutes() ? `${leftTime.minutes()}м ` : ""
    const seconds = leftTime.seconds() ? `${leftTime.seconds()}с` : ""
    return `${days}${hours}${minutes}${seconds}`
  }

  render() {
    const { isHintShown, leftTime, isRepetitionAvailable } = this.state
    const { repeatProgress, repeatCount, lastRepetitionDate, completeOneTime } = this.props
    return (
      <div className="habit-actions">
        <ReactSVG
          disabled={lastRepetitionDate && !isRepetitionAvailable}
          className="confirm-button"
          src={confirmHabitIcon}
          onClick={completeOneTime}
        />
        <div className="hint-container" onMouseLeave={this.onHintHide}>
          <div onMouseOver={this.onHintShow}>
            {
              (isRepetitionAvailable || !lastRepetitionDate)
                ? <div className="habit-progress">{repeatProgress} / {repeatCount}</div>
                : <div className="loading-bar" />
            }
          </div>
          {
            !!repeatProgress &&
            <div className={`hint ${isHintShown ? "active" : ""}`}>
              С последнего выполнения прошло: {leftTime}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default HabitActions
