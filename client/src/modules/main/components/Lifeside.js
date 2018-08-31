// @flow

import type { Lifeside as LifesideType } from 'types/Lifeside'
import React from 'react'
import Flask from './Flask'
import '../styles/lifeside.scss'
import HabitContainer from './HabitContainer'
import { connect } from 'react-redux'

type Props = {
  lifeside: LifesideType,
}

class Lifeside extends React.Component<Props> {
  render () {
    return (
      <div className="lifeside-wrapper">
        <Flask />
        <div className="lifeside-right-side-container">
          <HabitContainer />
        </div>
      </div>
    )
  }
}

export default connect(({ lifeside }) => lifeside)(Lifeside)
