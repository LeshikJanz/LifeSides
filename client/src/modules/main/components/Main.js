// @flow

import React from 'react'
import Level from './Level'
import Lifeside from './Lifeside'
import '../styles/main.scss'
import api from 'api/lifeside'

type Props = {}

type State = {
  selectedLifeside?: Lifeside,
  lifesides: Lifeside[],
}

class Main extends React.Component<Props, State> {
  state = {
    selectedLifeside: [],
    lifesides: [],
  }

  async componentDidMount() {
    const lifesides = await api.fetchLifesides()
    this.setState({ lifesides })
  }

  onChangeLifeside = () => {
    
  }

  render() {
    const { selectedLifeside, lifesides } = this.state
    return (
      <div className="main-container">
        <Level name="Здоровье" value="20" onChangeLifeside={this.onChangeLifeside} />
        <Lifeside {...selectedLifeside} />
      </div>
    )
  }
}

export default Main

