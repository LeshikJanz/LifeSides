// @flow

import type { Lifeside as LifesideType } from 'types/Lifeside'
import React from 'react'
import Habit from 'components/habit/Habit'
import Flask from './Flask'
import '../styles/lifeside.scss'


class Lifeside extends React.Component<LifesideType> {
  render() {
    return (
      <div className="lifeside-wrapper">
        <Flask />
        <div className="lifeside-right-side-container">
          <div className="lifeside-habit-container">
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
    )
  }
}

export default Lifeside
