// @flow

import React from 'react'
import Level from './Level'
import '../styles/main.scss'
import Habit from 'components/habit/Habit'
import Flask from './Flask'

type Props = {}

class Main extends React.Component<Props> {
  render () {
    return (
      <div className="main-container">
        <Level name="Здоровье" value="20" />
        <div className="main-wrapper">
          <div>
            <Flask />
          </div>
          <div className="main-right-side-container">
            <div className="main-habit-container">
              <Habit
                text="Перестать есть рафинированные продукты"
                repeatCompletedCount={10}
                repeatCount={35}
              />
              <Habit
                text="Перестать есть рафинированные продукты"
                repeatCompletedCount={10}
                repeatCount={35}
              />
              <Habit
                text="Перестать есть рафинированные продукты"
                repeatCompletedCount={10}
                repeatCount={35}
              />
              <Habit
                text="Перестать есть рафинированные продукты"
                repeatCompletedCount={10}
                repeatCount={35}
              />
              <Habit
                text="Перестать есть рафинированные продукты"
                repeatCompletedCount={10}
                repeatCount={35}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main

