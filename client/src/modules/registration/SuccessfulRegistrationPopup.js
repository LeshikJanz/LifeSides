// @flow

import type { Popup } from "types/popup"
import React from "react"
import popup from 'hocs/popup'

function SuccessfulRegistrationPopup ({ hide }: Popup) {
  return (
    <div className="popup-central successful-registration-wrapper popup-container">
      <div className="popup-close" onClick={hide} />
      <div className="popup-header successful-title">
        Успешная регистрация!
      </div>
      <hr className="popup-header-line" />
      <div className="successful-registration-content popup-body">
        Благодарим Вас за регистрацию! <br /><br />
        Ставьте цели и повторяйте их каждый день,<br /> пока не выработается привычка.<br /><br />
        Мы Вам в этом поможем!
      </div>
      <div className="successful-registration-actions form-actions">
        <button className="green gta">
          Отлично!
        </button>
      </div>
    </div>
  )
}

export default popup(SuccessfulRegistrationPopup)
