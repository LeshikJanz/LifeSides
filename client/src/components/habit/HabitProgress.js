// @flow

import React from 'react'
import moment from 'moment'

const INTERVAL_DURATION = 1000

type Props = {
  repeatProgress: number,
  repeatCount: number,
  lastRepetitionDate: string,
  isRepetitionAvailable: boolean,
}

type State = {
  isHintShown: boolean,
}

class HabitProgress extends React.Component<Props, State> {
  state = {
    isHintShown: false,
    leftTime: 0,
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ leftTime: this.getFormattedLeftTime() })
    }, INTERVAL_DURATION)
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

  render () {
    const { isHintShown, leftTime } = this.state
    const { isRepetitionAvailable, repeatProgress, repeatCount, lastRepetitionDate } = this.props
    return (
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
    )
  }
}

export default HabitProgress
