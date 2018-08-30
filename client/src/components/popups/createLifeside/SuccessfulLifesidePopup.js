// @flow

import type { Popup } from "types/popup"
import React from "react"
import popup from 'hocs/popup'

const SuccessfulLifesidePopup = ({ hide, name }: Popup) => (
  <div className="popup-central successful-registration-wrapper popup-container">
    <div className="popup-close" onClick={hide} />
    <div className="popup-header successful-title">
      Успешно!
    </div>
    <hr className="popup-header-line" />
    <div className="successful-registration-content popup-body">
      Сторона жизни <b>{name}</b> создана! <br /><br />
      Создавайте навыки и прокачивайте сторону жизни,<br />
      чтобы стать наиболее успешным в этой области.
    </div>
    <div className="successful-registration-actions form-actions">
      <button className="green gta" onClick={hide}>
        Продолжить
      </button>
    </div>
  </div>
)

export default popup(SuccessfulLifesidePopup)
