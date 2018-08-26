// @flow

import type { Popup } from "types/popup"
import type { DropdownItem } from 'types/common'
import React from 'react'
import popup from 'hocs/popup'
import './styles.scss'
import Field from 'components/field/Field'
import Dropdown from 'components/dropdown/Dropdown'
import { HOURS, MINUTES } from './constants'
import { isPasswordsSame } from './utils'

type Props = {} & Popup

type State = {
  notificationHour: ?DropdownItem,
  notificationMinute: ?DropdownItem,
  isFormValid: boolean,
  nonValidFieldNames: Object,
}

class RegistrationPopup extends React.Component<Props, State> {
  formRef: HTMLFormElement

  state = {
    notificationHour: null,
    notificationMinute: null,
    isFormValid: false,
    nonValidFieldNames: {},
  }

  componentDidMount() {
    this.formRef.addEventListener("blur", this.formValidation, true)
    document.addEventListener("keypress", this.checkIfFieldBecomeValid, true)
  }

  componentWillUnmount() {
    this.formRef.removeEventListener("blur", this.formValidation, true)
    document.removeEventListener("keypress", this.checkIfFieldBecomeValid, true)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  onDropdownChange = (name: string, value: string) =>
    this.setState({ [name]: value })

  checkIfFieldBecomeValid = (e) => {
    if (e.target.checkValidity() && this.state.nonValidFieldNames[e.target.name]) {
      this.setState(prevState => ({
        nonValidFieldNames: {
          ...prevState.nonValidFieldNames,
          [e.target.name]: false,
        }
      }))
    }
  }

  isFormValid = () => {
    const nonValidFieldNames = {}
    const requiredElemsFilled = [...this.formRef.elements].every(elem => {
      if (elem.checkValidity()) {
        return true
      }
      // Check for dirty
      if (elem.value && elem.name !== document.activeElement.name) {
        nonValidFieldNames[elem.name] = true
      }
      return false
    })
    const { password, submitPassword } = this.formRef
    const isPassSame = isPasswordsSame(password.value, submitPassword.value)
    if (isPassSame === false) {
      nonValidFieldNames[password.name] = nonValidFieldNames[submitPassword.name] = true
    }
    this.setState({ nonValidFieldNames })
    return isPassSame === true && requiredElemsFilled
  }

  formValidation = () => {
    const isFormValid = this.isFormValid()
    if (isFormValid) {
      this.setState({ isFormValid })
    }
    if (!isFormValid && this.state.isFormValid) {
      this.setState({ isFormValid })
    }
  }

  render() {
    const { hide } = this.props
    const { notificationHour, notificationMinute, isFormValid, nonValidFieldNames } = this.state
    return (
      <div className="registration-wrapper popup-container">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header">
          <div className="popup-header-title dark-red">
            Регистрация
          </div>
          <hr className="popup-header-line" />
        </div>
        <form
          className="popup-body"
          onSubmit={this.handleSubmit}
          ref={(ref) => (this.formRef = ref) }
        >
          <Field
            name="email"
            title="Email*"
            type="email"
            placeholder="email"
            required
            errorText="Введен некорректный email"
            isError={nonValidFieldNames["email"]}
          />
          <Field
            name="name"
            title="Имя пользователя*"
            placeholder="имя пользователя"
            required
            errorText="Введено некорректное имя пользователя"
            isError={nonValidFieldNames["name"]}
          />
          <div className="field">
            <title>Получать уведомления в ( чч:мм )</title>
            <div className="inline">
              <Dropdown
                name="notificationHour"
                activeItem={notificationHour}
                onChange={this.onDropdownChange}
                items={HOURS}
                placeholder="чч"
                tabIndex="5"
                width="60"
              />
              <Dropdown
                name="notificationMinute"
                activeItem={notificationMinute}
                onChange={this.onDropdownChange}
                items={MINUTES}
                placeholder="мм"
                tabIndex="5"
                width="60"
              />
            </div>
          </div>
          <Field
            type="password"
            name="password"
            title="Пароль*"
            placeholder="пароль"
            required
            errorText=""
            isError={nonValidFieldNames["password"]}
          />
          <Field
            name="submitPassword"
            title="Подтверждение пароля*"
            placeholder="подтверждение пароля"
            type="password"
            required
            errorText="Пароли не совпадают"
            isError={nonValidFieldNames["submitPassword"]}
          />
          <div className="form-actions">
            <button className="green" disabled={!isFormValid}>
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default popup(RegistrationPopup)
