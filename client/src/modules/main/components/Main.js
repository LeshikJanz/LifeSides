// @flow

import React from 'react'
import Level from './Level'
import '../styles/main.scss'
import Habit from 'components/habit/Habit'

type Props = {}

class Main extends React.Component<Props> {
  render() {
    return (
      <div className="main-wrapper">
        <div>
          <h1>Main</h1>
          <Habit
            text="Перестать есть рафинированные продукты"
            repeatCompletedCount={10}
            repeatCount={35}
          />
        </div>
        <Level name="Здоровье" value="20" />
      </div>
    )
  }
}

export default Main

