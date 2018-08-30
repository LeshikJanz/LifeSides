// @flow

import type { Popup } from "types/popup"
import React from "react"
import popup from 'hocs/popup'

const SuccessfulHabitCreationPopup = ({ hide, name }: Popup) => (
  <div className="popup-central successful-registration-wrapper popup-container">
    <div className="popup-close" onClick={hide} />
    <div className="popup-header successful-title">
      Успешно!
    </div>
    <hr className="popup-header-line" />
    <div className="successful-registration-content popup-body">
      Привычка <b>{name}</b> создана! <br /><br />
      Выполняйте ее каждый день пока она не будет усвоена <br />
      и добавлена в колбу навыков.
    </div>
    <div className="successful-registration-actions form-actions">
      <button className="green gta" onClick={hide}>
        Продолжить
      </button>
    </div>
  </div>
)

export default popup(SuccessfulHabitCreationPopup)
