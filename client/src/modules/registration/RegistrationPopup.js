// @flow

import type { Popup } from "types/popup"
import React from 'react'
import popup from 'hocs/popup'
import "./styles.scss"

type Props = {} & Popup

class RegistrationPopup extends React.Component<Props> {
  render() {
    return (
      <div className="registration-wrapper popup-container">
        <div className="popup-close" onClick={this.props.hide} />
        <div className="popup-header">
          <div className="popup-header-title dark-red">
            Регистрация
          </div>
          <hr className="popup-header-line" />
        </div>
      </div>
    )
  }
}

export default popup(RegistrationPopup)
