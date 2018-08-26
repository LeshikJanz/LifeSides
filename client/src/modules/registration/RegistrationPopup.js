// @flow

import type { Popup } from "types/popup"
import type { DropdownItem } from 'types/common'
import React from 'react'
import popup from 'hocs/popup'
import './styles.scss'
import Field from 'components/field/Field'
import Dropdown from 'components/dropdown/Dropdown'
import { HOURS, MINUTES } from './constants'

type Props = {} & Popup

type State = {

  notificationHour: ?DropdownItem,
  notificationMinute: ?DropdownItem,
}

class RegistrationPopup extends React.Component<Props> {
  state = {
    notificationHour: null,
    notificationMinute: null,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleForm")
  }

  onDropdownChange = (name: string, value: string) =>
    this.setState({ [name]: value })

  render() {
    const { hide } = this.props
    const { notificationHour, notificationMinute } = this.state
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
          <div className="field">
            <title>Получать уведомления в</title>
            <div className="inline">
              <Dropdown
                name="notificationHour"
                activeItem={notificationHour}
                onChange={this.onDropdownChange}
                items={HOURS}
                placeholder="чч"
                tabIndex="5"
                width="60"
                height="42"
              />
              <Dropdown
                name="notificationMinute"
                activeItem={notificationMinute}
                onChange={this.onDropdownChange}
                items={MINUTES}
                placeholder="мм"
                tabIndex="5"
                width="60"
                height="42"
              />
            </div>
          </div>
          <div className="form-actions">
            <button className="dark-red-empty" onClick={hide}>
              Отмена
            </button>
            <button className="green">
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default popup(RegistrationPopup)
