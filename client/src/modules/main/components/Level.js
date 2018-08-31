import type { Lifeside } from 'types/Lifeside'
import React from 'react'
import { connect } from 'react-redux'
import '../styles/level.scss'

type Props = {
  name: string,
  level: string,
  lifesides: Lifeside[],
}

type State = {
  isOpen: boolean,
}

class Level extends React.Component<Props, State> {
  state = {
    isOpen: false,
  }

  handleDropdown = () => {
    console.log("handleDropdown")
  }

  onDropdownChange = () => {
    console.log("onDropdownChange")
  }

  handleOpen = () => this.setState(({ isOpen: true }))
  onMouseLeave = () => this.setState(({ isOpen: false }))

  render () {
    const { name, value, lifesides } = this.props
    const { isOpen } = this.state
    return (
      <div
        className="level-wrapper"
        onMouseOver={this.handleOpen}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="level-dropdown-btn">
          <span>{name}</span>
          <span className={`arrow-down ${isOpen ? "active" : ""}`} />
        </div>
        <hr />
        <span>{value} уровень</span>
        {
          isOpen &&
          <ul className="level-dropdown-list">
            {
              lifesides.map(lifeside =>
                <li
                  key={lifeside.id}
                  onClick={() => this.onDropdownChange(lifeside)}
                  value={lifeside.id}
                >
                  {lifeside.name}
                </li>
              )
            }
          </ul>
        }
      </div>
    )
  }
}

export default connect(({ lifeside }) => ({
  lifesides: lifeside.list,
}))(Level)
