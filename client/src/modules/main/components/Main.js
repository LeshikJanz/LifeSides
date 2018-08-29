// @flow

import React from 'react'
import Level from './Level'
import '../styles/main.scss'

type Props = {}

class Main extends React.Component<Props> {
  render () {
    return (
      <div className="main-wrapper">
        <div>
          <h1>Main</h1>
        </div>
        <Level name="Здоровье" value="20" />
      </div>
    )
  }
}

export default Main

