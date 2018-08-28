// @flow

import React from 'react'
import './header.scss'
import { MONTH_NAMES_COUNTED } from 'constants/dates'
import userIcon from 'assets/images/user-icon.png'

class Header extends React.Component<{}> {
  render () {
    const date = new Date()
    return (
      <div className="header-wrapper">
        <div className="header-logo-label">
          Life Sides
        </div>
        <div className="header-logo-container">
          <button className="green">
            <span>Создать</span>
          </button>
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
