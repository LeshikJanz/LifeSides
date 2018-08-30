// @flow

import type { DropdownItem } from 'types/common'
import React from 'react'
import './header.scss'
import { MONTH_NAMES_COUNTED } from 'constants/dates'
import userIcon from 'assets/images/user-icon.png'
import { HEADER_MENU_ITEMS, HEADER_PROFILE_MENU_ITEMS } from './constants'
import CreateHabit from 'components/popups/createHabit/CreateHabit'

type State = {
  isCreationDropdownOpen: boolean,
  isAvatarDropdownOpen: boolean,
}

class Header extends React.Component<{}, State> {
  state = {
    isCreationDropdownOpen: false,
    isAvatarDropdownOpen: false,
  }

  handleOpen = (dropdownType: "isCreationDropdownOpen" | "isAvatarDropdownOpen") => {
    this.setState({ [dropdownType]: true })
  }

  onDropdownChange = (item: DropdownItem) => {
    switch (item.value) {
      case "habbit":
        CreateHabit.show()
        break
      default:
        return
    }
  }

  onMouseLeave = () =>
    this.setState({ isCreationDropdownOpen: false, isAvatarDropdownOpen: false })

  render () {
    const date = new Date()
    const { isCreationDropdownOpen, isAvatarDropdownOpen } = this.state
    return (
      <div className="header-wrapper">
        <div className="header-logo-label">
          Life Sides
        </div>
        <div
          className="header-logo-container"
          onMouseLeave={this.onMouseLeave}
        >
          <button
            className={`green ${isCreationDropdownOpen ? "active" : ""}`}
            onMouseOver={() => this.handleOpen("isCreationDropdownOpen")}
          >
            <span>Создать</span>
          </button>
          {
            isCreationDropdownOpen &&
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
          <div
            className={`header-logo ${isAvatarDropdownOpen ? "active" : ""}`}
            onMouseOver={() => this.handleOpen("isAvatarDropdownOpen")}
          >
            <img src={userIcon} alt="" />
            {
              isAvatarDropdownOpen &&
              <ul className="header-dropdown">
                {
                  HEADER_PROFILE_MENU_ITEMS.map((item, index) =>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Header
