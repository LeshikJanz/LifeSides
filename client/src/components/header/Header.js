// @flow

import React, { Fragment } from 'react'
import './header.scss'
import { MONTH_NAMES_COUNTED } from 'constants/dates'
import userIcon from 'assets/images/user-icon.png'
import Dropdown from '../dropdown/Dropdown'
import { HEADER_MENU_ITEMS } from './constants'

class Header extends React.Component<{}> {
  state = {
    isDropdownOpen: false,
  }

  handleOpen = () => {
    this.setState({ isDropdownOpen: true })
  }

  onDropdownChange = () => {

  }

  onMouseLeave = () => {
    if (this.state.isDropdownOpen) {
      this.setState({ isDropdownOpen: false })
    }
  }

  render () {
    const date = new Date()
    const { isDropdownOpen } = this.state
    return (
      <div className="header-wrapper">
        <div className="header-logo-label">
          Life Sides
        </div>
        <div className="header-logo-container" onMouseLeave={this.onMouseLeave}>
          <button className="green" onMouseOver={this.handleOpen}>
            <span>Создать</span>
          </button>
          {
            isDropdownOpen &&
            <ul className="header-dropdown">
              {
                HEADER_MENU_ITEMS.map((item, index) =>
                  <li
                    key={index}
                    onClick={() => this.onDropdownChange(item)}
                    value={item.value}
                  >
                    {item.title}
                  </li>
                )
              }
            </ul>
          }
          <div className="header-date">
            {`${date.getDate()} ${MONTH_NAMES_COUNTED[date.getMonth()]} ${date.getFullYear()}`}
          </div>
          <div className="header-logo">
            <img src={userIcon} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
