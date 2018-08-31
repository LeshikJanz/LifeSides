// @flow

import React from 'react'
import Level from './Level'
import Lifeside from './Lifeside'
import '../styles/main.scss'
import { connect } from 'react-redux'
import { fetchLifesidesRequested } from 'components/popups/createLifeside/actions'

type Props = {
  fetchLifesidesRequested: () => void,
}

class Main extends React.Component<Props> {
  componentDidMount () {
    this.props.fetchLifesidesRequested()
  }

  render () {
    return (
      <div className="main-container">
        <Level name="Здоровье" value="20" onChangeLifeside={this.onChangeLifeside} />
        <Lifeside />
      </div>
    )
  }
}

export default connect(null,
  ({ fetchLifesidesRequested }),
)(Main)

