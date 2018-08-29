// @flow

import React from "react"

type Props = {
  text: string,
}

class Habit extends React.Component<Props> {
  render() {
    const { text } = this.props
    return (
      <div className="habit-wrapper">
        <div className="habit-text-block">
          {text}
        </div>
      </div>
    )
  }
}

export default Habit
