// @flow

import type { Popup } from "types/popup"
import React from 'react'
import popup from 'hocs/popup'
import './styles.scss'
import Field from 'components/field/Field'

type Props = {} & Popup

class RegistrationPopup extends React.Component<Props> {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleForm")
  }

  render() {
    const { hide } = this.props
    return (
      <div className="registration-wrapper popup-container">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header">
          <div className="popup-header-title dark-red">
            Регистрация
          </div>
          <hr className="popup-header-line" />
        </div>
        <form className="popup-body" onSubmit={this.handleSubmit}>
          <Field title="Email*" placeholder="email" />
          <Field title="Имя пользователя*" placeholder="имя пользователя" />
          <Field title="Пароль*" placeholder="пароль" />
          <Field title="Подтверждение пароля*" placeholder="подтверждение пароля" />
          <button className="dark-red-empty" onClick={hide}>
            Отмена
          </button>
          <button className="green">
            Подтвердить
          </button>
        </form>
      </div>
    )
  }
}

export default popup(RegistrationPopup)
